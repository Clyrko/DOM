const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click

clearBtn.addEventListener('click', runEvent);

// DOuble click

clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down

clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up

clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter

card.addEventListener('mouseenter', runEvent);

// Mouse leave

card.addEventListener('mouseleave', runEvent);

// Mouse Over

card.addEventListener('mouseover', runEvent);

// Mouse out

card.addEventListener('mouseout', runEvent

// Mouse move

card.addEventListener('mousemove', runEvent);

// Event Handler

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `mouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
