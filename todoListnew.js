const form = document.querySelector('#to-do-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = taskInput.value;
  if (task) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><button>Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
    li.querySelector('button').addEventListener('click', function() {
      taskList.removeChild(li);
    });
  }
});
