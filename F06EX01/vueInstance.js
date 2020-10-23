const vm = new Vue({
    el: '#app',
    data: {
        task: '',
        type: 'pessoal',
        filter:'',
        tasks: []
    },
    created() {
        // Add listener to save tasks only when the tab closes
        window.addEventListener('unload', this.saveStorage)

        // Get tasks from localStorage
        if (localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    },
    methods: {
        // Save tasks in the localstorage
        saveStorage() {            
            localStorage.setItem('tasks',JSON.stringify(this.tasks))
        },
        // Get the next Id to assign to the new task
        getNextId() {
            if (this.tasks.length == 0) {
                return 1
            } else {
                return this.tasks[this.tasks.length - 1].id + 1
            }
        },
        // Add a task (validates duplicated names)
        addTask() {
            if (this.tasks.some(task => task.name === this.task)) {
                alert('Tarefa ja existente!')
            } else {
                const newTask = { id: this.getNextId(), name: this.task, type: this.type }
                this.tasks.push(newTask)
                alert('Tarefa adicionada!')
            }
        },
        // Remove task by id
        removeTask(id) {
            this.tasks = this.tasks.filter(
                task => task.id !== id
            )
        }
    },
    computed: {
        // Filter tasks by type
        filterTasks() {
            return this.tasks.filter(
                task => task.type === this.filter || this.filter === ''
            )
        }
    }
})