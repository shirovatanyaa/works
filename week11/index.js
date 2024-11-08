const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Создаю функцию createTask()
function createTask() {
    // Создаю новый элемент списка
    const newTask = document.createElement('li');
    
    // Присваиваю текст из поля ввода в качестве содержимого новой задачи
    newTask.textContent = taskInput.value;
    
    // Добавляю новую задачу в список
    taskList.append(newTask);
    
    // Очищаю поле ввода
    taskInput.value = '';
}

// Создаю функцию checkTask()
function checkTask(event) {
    // Проверяю, что кликнули на элемент списка
    if (event.target.tagName === 'LI') {
        // Переключаю состояние выполнения задачи
        event.target.classList.toggle('completed');
    }
}

// Добавляю функцию-обработчик к событию клика на кнопку
addTaskButton.addEventListener('click', createTask);

// Добавляю функцию-обработчик к событию клика на список задач
taskList.addEventListener('click', checkTask);