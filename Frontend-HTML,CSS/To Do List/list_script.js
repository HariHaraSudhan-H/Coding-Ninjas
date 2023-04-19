var todoList = (function () {
    let tasks = [];
    const taskInput = document.getElementById('taskInput');
    const list = document.getElementById('list')
    const counter = document.getElementById('count');
    async function fetchToDo() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(function(response){
        //     console.log(response);
        //     return response.json();
        // })
        // .then(function(data){
        //     tasks=data.slice(0,5);
        //     renderlist();
        // })
        // .catch(function(error){
        //     console.log("error",error);
        // })

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks = data.slice(0, 8);
            renderlist();
        } catch (error) {
            console.log("error : ", error);
        }
    }
    function addItemToDom(task) {
        const li = document.createElement('li');
        li.innerHTML = `
    <input type="checkbox" name="task1" id="${task.id}" data-id="${task.id}" class="custom-checkbox" ${task.completed ? "checked" : ""}>
    <label for="${task.id}">${task.title}</label>
    <i class="fa-solid fa-trash-can delete" data-id="${task.id}" id="delete"></i>
    `;
        list.append(li);
    }
    function renderlist() {
        list.innerHTML = '';
        for (let i of tasks) {
            addItemToDom(i);
        }
        counter.innerHTML = tasks.length
    }

    function addTask(task) {
        if (task) {
            tasks.push(task);
            renderlist();
            showNotification(task.title + " added to ToDo List");
            return;
        }
        showNotification("Task cannot be added");
    }

    function toggletask(taskId) {
        const task = tasks.filter(function (task) {
            return task.id === Number(taskId);
        })
        if (task.length > 0) {
            task[0].completed = !task[0].completed;
            renderlist();
            showNotification("Task toggling done");
            return
        }
        showNotification("Task not found");
    }

    function deleteTask(taskId) {
        const newTasks = tasks.filter(function (task) {
            return task.id !== Number(taskId);
        });
        tasks = newTasks;
        renderlist();
        showNotification("Task deleted successfully");
    }

    function showNotification(text) {
        alert(text);
    }

    function handleInputKey(e) {
        if (e.key === 'Enter') {
            const text = e.target.value;

            if (!text) {
                showNotification("Text is empty");
                return;
            }

            const task = {
                title: text,
                id: Date.now(),
                completed: false
            }
            e.target.value = '';
            addTask(task);
        }
    }

    function handleClickEvents(e) {
        const target = e.target;
        console.log(e.target.id);
        if (target.id === 'delete') {
            deleteTask(target.dataset.id);
            console.log(`deleting ${target.id}`)
        } else if (target.className === 'custom-checkbox') {
            toggletask(target.id);
            console.log('toggling done')
        }
    }
    function startApp() {
        fetchToDo();
        taskInput.addEventListener('keyup', handleInputKey);
        document.addEventListener('click', handleClickEvents);
    }

    return {
        startApp:startApp,
    }
})();