import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    this.tasks = data.tasks
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get ListTemplate() {
    return /**html */ `
    <div class="col-4 bg-light border rounded shadow-lg p-4 m-4">
      <h2>${this.title}</h2>
      <div class="d-flex align-items-center">
          <form onsubmit="app.taskController.create(event)">
              <div class="form-group d-flex">
                  <input type="text" name="taskName" class="form-control mr-5" placeholder="Task Name">
                  <button type="submit" class="btn btn-outline-info btn-sm ml-5"><i class=fa-plus"></i></button>
              </div>
          </form>
          <button class="btn btn-outline-danger btn-sm ml-2 mb-3 p-2" onclick="app.listController.delete('${this.id}') "><i class="fas fa - minus"></i></button>
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
