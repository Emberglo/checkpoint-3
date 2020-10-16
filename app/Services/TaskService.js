import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

//Public
class TaskService {

    constructor() {
        ProxyState.on("tasks", saveState)
    }

    create(rawTask) {
        let tasks = ProxyState.tasks
        tasks.push(new Task(rawTask))
        ProxyState.tasks = tasks
    }

    delete(id) {
        if (confirm("Are you sure?")) {
            ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        }
    }


}

export const taskService = new TaskService();