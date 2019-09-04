// EVENT Bubbling

document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function () {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function () {
  console.log('col');
});

// EVENT DELEGATION

const delItem = document.querySelector('delete-item');

deleteItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  console.log('delete item');
  console.log(e.target);

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
  }
}
