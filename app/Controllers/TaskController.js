import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"
import { taskService } from "../Services/TaskService.js";

//Public
export default class TaskController {

    create(e, listId) {
        e.preventDefault()

        let form = e.target
        
        let rawTask = {
            taskName: form.taskName.value,
            listId: listId
        }

        taskService.create(rawTask)

        form.reset()
    }

    delete(id) {
        taskService.delete(id)
    }

}