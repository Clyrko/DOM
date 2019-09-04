const form = document.querySelector('form');

const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

// TO clear input

taskInput.value = '';

form.addEventListener('sumbit', runEvent);

//Key Down

taskInput.addEventListener('keydown', runEvent);

//Key Up

taskInput.addEventListener('keyup', runEvent);

//Key Press

taskInput.addEventListener('keypress', runEvent);

// Focus

taskInput.addEventListener('focus', runEvent);

// blur

taskInput.addEventListener('blur', runEvent);

// cut

taskInput.addEventListener('cut', runEvent);

// Paste

taskInput.addEventListener('paste', runEvent);

// Input

taskInput.addEventListener('input', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // get input value

  console.log(taskInput.value);

  e.preventDefault();
}
