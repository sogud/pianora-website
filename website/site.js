const noteButtons = document.querySelectorAll('.note-picker button');
const scoreNotes = document.querySelectorAll('.score-note');
const pianoKeys = document.querySelectorAll('.white[data-note]');
const currentNote = document.querySelector('#current-note');
const keyboard = document.querySelector('.keyboard');

for (const button of noteButtons) {
  button.addEventListener('click', () => {
    const note = button.dataset.note;
    for (const choice of noteButtons) {
      choice.setAttribute('aria-pressed', String(choice === button));
    }
    for (const symbol of scoreNotes) {
      symbol.classList.toggle('selected', symbol.dataset.note === note);
    }
    for (const key of pianoKeys) {
      key.classList.toggle('selected', key.dataset.note === note);
    }
    currentNote.textContent = '当前示意音：' + note + '4';
    keyboard.setAttribute('aria-label', '一组钢琴琴键，当前高亮 ' + note + '4');
  });
}
