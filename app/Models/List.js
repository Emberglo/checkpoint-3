import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId();
  }

  get ListTemplate() {

    return /*html*/ `<div class="col-5 bg-light border rounded shadow-lg p-4 my-4">
      <h2>${this.title}</h2>
      <div class="d-flex align-items-center">
          <form class="w-100" onsubmit="app.taskController.create(event, '${this.id}')">
              <div class="form-group d-flex">
                  <input type="text" name="taskName" id="taskName" class="form-control mr-5" placeholder="Task Name">
                  <button type="submit" class="btn btn-info btn-sm ml-5"><i class="fa fa-plus"></i></button>
              </div>
          </form>
          <button class="btn btn-danger btn-sm ml-2 mb-3 p-2" onclick="app.listController.delete('${this.id}') "><i class="fa fa-minus"></i></button>
      </div >
      <div id="tasks">
      ${this.Tasks}
      </div>
    </div >`
  }
  

  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.TaskTemplate);
    return template
  }

}
