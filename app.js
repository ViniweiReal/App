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
