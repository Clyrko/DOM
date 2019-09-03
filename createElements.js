// Creating elements

const li = document.createElement('li');

// Add class

li.className = 'collection-item';

// Add ID

li.id = 'new-item';

// Add Attribute

li.setAttribute('title', 'New item');

// Create text node & append(putting something in something)

li.appendChild(document.createTextNode('Hello World'));

// create new link element

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

// Append li as child to UL

document.querySelector('ul.collection').appendChild(li);

console.log(li);
