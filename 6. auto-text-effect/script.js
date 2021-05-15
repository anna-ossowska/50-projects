const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'This is a very long sentence';
let indx = 1;
let speed = 300;

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));

function writeText() {
  textEl.innerText = text.slice(0, indx);
  indx++;

  if (indx > text.length) {
    indx = 1;
  }

  setTimeout(writeText, speed);
}

writeText();
