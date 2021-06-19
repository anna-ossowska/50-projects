'use strict';

const addBtn = document.getElementById('add');

const addNewNote = function (text = '') {
  const note = document.createElement('div');

  note.classList.add('note');

  note.innerHTML = `
  <div class="tool">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  <!-- Hide when in the edit mode -->
  <div class="main ${text ? '' : 'hidden'}"></div>
  <!-- Show text area when in the edit mode -->
  <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  document.body.appendChild(note);

  const deleteBtn = note.querySelector('.delete');
  const editBtn = note.querySelector('.edit');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text);
  deleteBtn.addEventListener('click', () => {
    note.remove();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    main.innerHTML = marked(e.target.value);

    updateLocalSorage();
  });
};

addBtn.addEventListener('click', () => addNewNote());

const getFromLocalStorage = function () {
  const textArr = JSON.parse(localStorage.getItem('notes'));

  textArr.forEach((text) => addNewNote(text));
};

getFromLocalStorage();

const updateLocalSorage = function () {
  const notesTextArr = [];

  const notesText = document.querySelectorAll('textarea');

  notesText.forEach((n) => notesTextArr.push(n.value));

  localStorage.setItem('notes', JSON.stringify(notesTextArr));
};
