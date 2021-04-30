const generator1 = document.querySelector('.img-generator--1');
const generator2 = document.querySelector('.img-generator--2');
const generator3 = document.querySelector('.img-generator--3');

const container = document.querySelector('.container');

const unsplashURL = 'https://source.unsplash.com/random/';

let numOfImages;

generator1.addEventListener('click', () => {
  reset();
  numOfImages = 5;
  for (let i = 0; i < numOfImages; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${generateRandSize()}`;
    container.appendChild(img);
  }
});

generator2.addEventListener('click', () => {
  reset();
  numOfImages = 10;
  for (let i = 0; i < numOfImages; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${generateRandSize()}`;
    container.appendChild(img);
  }
});

generator3.addEventListener('click', () => {
  reset();
  numOfImages = 20;
  for (let i = 0; i < numOfImages; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${generateRandSize()}`;
    container.appendChild(img);
  }
});

function generateRandNum() {
  return Math.floor(Math.random() * 10) + 300;
}

function generateRandSize() {
  return `${generateRandNum()}x${generateRandNum()}`;
}

function reset() {
  let images = document.getElementsByTagName('img');
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
}
