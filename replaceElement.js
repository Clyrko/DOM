// REPLACE elements

// CREATE ELEMENT

const newHeading = document.createElement('h2');

// Add ID

newHeading.id = 'task-title';

// NEW text node

newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading (one geting replaced)

const oldHeading = document.getElementByID('task-tile');

// Parent

const cardAction = document.querySelector('.card-action');

// REPLACE

cardAction.replaceChild(newHeading, oldHeading);

// remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item

lis[0].remove();

// remove child

list.removeChild(lis[3]);

// CLASSES & ATTR

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes

val = link.className;
val = link.classList;

// ATTR

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // true
link.removeAtrribute('href');
