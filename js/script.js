const btnBox = document.querySelector('#menu-display');
const modalContainer = document.querySelector('#modal-container');
const workCard = document.getElementById('work-card-cont');
const menuOverlay = document.querySelector('#menu-overlay');
const menuButton = document.querySelector('#menu-btn-2');
const hamburgerButton = document.querySelector('#hamburger-button');
const workButton = document.querySelector('#work-btn');
const aboutButton = document.querySelector('#about-btn');
const contactButton = document.querySelector('#contact-btn');
const form = document.querySelector('#contact-me');
const inputField = document.querySelectorAll('.input-field');
const errorMessage = document.querySelector('#error-message');
const { email } = form.elements;

function showMenu() {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
}

menuButton.addEventListener('click', () => {
  showMenu();
});

hamburgerButton.addEventListener('click', () => {
  showMenu();
});

workButton.addEventListener('click', () => {
  showMenu();
});

aboutButton.addEventListener('click', () => {
  showMenu();
});

contactButton.addEventListener('click', () => {
  showMenu();
});

const projects = [
  {
    id: 1,
    name: 'Nubiacore Arts & Music Festival 2022',
    description: 'This is a website which highlights all the details of a music concert, which is scheduled to take place at a given date and time. It was built using HTML, CSS, and JavaScript.',
    cardImage: 'img/capstone-card.png',
    modalImage: 'img/capstone-modal.png',
    imageAlt: 'Nubiacore Arts & Music Festival 2022',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://iamchristianani.github.io/capstone-one/',
    sourceLink: 'https://github.com/iamchristianani/capstone-one',
  },
  {
    id: 2,
    name: 'To-do List',
    description: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. This was created by making use of ES6 and Webpack!.',
    cardImage: 'img/todo-list-card.png',
    modalImage: 'img/todo-list-modal.png',
    imageAlt: 'To-do List',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpacks'],
    liveLink: 'https://iamchristianani.github.io/to-do-list/dist/',
    sourceLink: 'https://github.com/iamchristianani/to-do-list',
  },
  {
    id: 3,
    name: 'Awesome Books',
    description: 'Awesome Books is a simple website that displays a list of books and their authors. This books can be dynamically added and removed from the list.',
    cardImage: 'img/awesome-books-card.png',
    modalImage: 'img/awesome-books-modal.png',
    imageAlt: 'Awesome Books',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://iamchristianani.github.io/awesome-books-es6/',
    sourceLink: 'https://github.com/iamchristianani/awesome-books-es6',
  },
];

function showModal() {
  modalContainer.classList.toggle('modal-display');
}

function openModal(projectIndex) {
  const oneProject = projects[projectIndex];
  let list = '';
  oneProject.technologies.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });

  const modalContent = `<div class="modal">
  <div class="modal-image-box">
      <div class="modal-close-btn" id="modal-close-btn">
          <i onclick="showModal()" class="fa-solid fa-xmark"></i>
      </div>
      <img src="${oneProject.modalImage}" alt="${oneProject.imageAlt}" class="modal-image-mobile">
  </div>
  <div class="modal-text-box">
      <h3>${oneProject.name}</h3>
      <ul class="modal-pr-lang">
        ${list}
      </ul>
      <p>${oneProject.description}</p>
      <div class="modal-btns">
          <button><a href="${oneProject.liveLink}">See Live <i class="fa-solid fa-arrow-up-right-from-square modal-btn-icon"></i></a></button>
          <button><a href="${oneProject.sourceLink}">See Source <i class="fa-brands fa-github modal-btn-icon"></i></a></button>
      </div>
  </div>
  </div>`;
  modalContainer.innerHTML = modalContent;
  showModal();
}

projects.forEach((items) => {
  let list = '';
  items.technologies.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });
  const workCardContent = `<li class="work-card">
  <div class="word-card-img">
    <img src="${items.cardImage}" alt="${items.imageAlt}" class="modal-image-mobile">
  </div>
  <div class="work-card-info">
      <h2>${items.name}</h2>
      <ul class="work-card-pr-lang" id="work-card-pr-lang-1">
          ${list}
      </ul>
      <button data-id="${items.id}" id="project-buttons">See Project</button>
  </div>
  </li>`;
  workCard.innerHTML += workCardContent;
});

const projectButtonList = document.querySelectorAll('#project-buttons');

projectButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = parseInt(button.dataset.id, 10) - 1;
    openModal(projectId);
  });
});

/** FORM VALIDATION */

form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    errorMessage.classList.remove('modal-display');
    event.preventDefault();
  }
});

/** STORE VALUES LOCALLY */

const storedData = {
  name: '',
  email: '',
  message: '',
};

inputField.forEach((input) => {
  input.addEventListener('input', () => {
    storedData[input.name] = input.value;
    localStorage.setItem('allData', JSON.stringify(storedData));
  });
});

const storedForm = JSON.parse(localStorage.getItem('allData'));
if (storedForm) {
  inputField.forEach((keyItem) => {
    keyItem.value = storedForm[keyItem.name];
  });
}
