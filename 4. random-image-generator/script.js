const container = document.querySelector('.container');

const unsplashURL = 'https://source.unsplash.com/random/';

const numOfImages = 5;

for (let i = 0; i < numOfImages * 2; i++) {
  const img = document.createElement('img');

  img.src = `${unsplashURL}${randomDimension()}`;

  container.appendChild(img);
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function randomDimension() {
  return `${randomNumber()}x${randomNumber()}`;
}
