const smileys = Array.from(document.querySelectorAll('.smiley'));
const hexInput = document.getElementById('hex-input');
const applyBtn = document.getElementById('apply-btn');
const statusText = document.getElementById('status');

let selected = smileys[0];

const isValidHex = (value) => /^#([0-9a-fA-F]{6})$/.test(value);

const selectSmiley = (smiley) => {
  selected.classList.remove('selected');
  selected = smiley;
  selected.classList.add('selected');

  const face = selected.querySelector('.face');
  const current = face.getAttribute('fill');
  hexInput.value = current;
  statusText.textContent = `Ausgewählt: Smiley ${selected.dataset.id}`;
};

smileys.forEach((smiley) => {
  smiley.addEventListener('click', () => {
    selectSmiley(smiley);
  });
});

applyBtn.addEventListener('click', () => {
  const value = hexInput.value.trim();

  if (!isValidHex(value)) {
    statusText.textContent = 'Ungültiger Hex-Code. Bitte #RRGGBB verwenden.';
    return;
  }

  const face = selected.querySelector('.face');
  face.setAttribute('fill', value.toLowerCase());
  statusText.textContent = `Smiley ${selected.dataset.id} wurde auf ${value.toLowerCase()} gesetzt.`;
});

selectSmiley(selected);
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const clearCompletedBtn = document.getElementById('clear-completed');

let tasks = [];

const renderTasks = () => {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = `task-item${task.done ? ' done' : ''}`;

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.title;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = task.done ? 'Undo' : 'Done';
    doneBtn.addEventListener('click', () => {
      task.done = !task.done;
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      renderTasks();
    });

    actions.append(doneBtn, deleteBtn);
    li.append(taskText, actions);
    taskList.appendChild(li);
  });

  const remaining = tasks.filter((task) => !task.done).length;
  taskCount.textContent = `${remaining} task${remaining === 1 ? '' : 's'} remaining`;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();
  if (!title) {
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    title,
    done: false,
  });

  taskInput.value = '';
  taskInput.focus();
  renderTasks();
});

clearCompletedBtn.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.done);
  renderTasks();
});

renderTasks();
