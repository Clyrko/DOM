// Set local storage Item

localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// Set session storage Item

sessionStorage.setItem('name', 'Beth');

// remove from Storage

localStorage.removeItem('name');

// get from Storage

const name = localStorage.getItem('name');
const name = localStorage.getItem('age');

// CLear local storage

localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('sumbit', function (e) {

  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = localStorage.getItem('tasks');

tasks.forEach(function (task) {
  console.log(task);
});
