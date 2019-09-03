let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItems;

// Get child nodes

val = list.childNodes; // Not good because it includes line break in count
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes - gives you just the elements

val = list.children;
val = list.children[0];
list.children[2].textContent = 'Hello';

// Children of Children

val = list.children[3].children;

// First child

val = list.firstChild; // gives you the first node
val = list.firstElementChild; // to get the first elements

// Lasst child

val = list.lastChild; // gives you the last node
val = list.lastElementChild; // to get the last elements

// Count child elements

val = list.childElementCount;

// Get parent nodes

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
