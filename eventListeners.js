document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  console.log('Hello World');

  e.preventDefault(); // stops it from doing default link behavior
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  console.log('Clicked');
}

function onClick(e) {
  let val;

  val = e;

  // Event target element

  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello

  // event type

  val = e.type;

  // timestamp

  val = e.timestamp;

  // Coords event relative to the window

  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element

  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
