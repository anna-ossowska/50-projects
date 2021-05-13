const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const inputLength = input.length;
  let blurValue = 20 - inputLength * 2;

  background.style.filter = `blur(${blurValue}px)`;
});
