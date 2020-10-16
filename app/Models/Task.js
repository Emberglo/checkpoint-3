import { generateId } from "../Utils/GenerateId.js";


export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.name = name
    this.id = data.id || generateId();
    this.listId = data.listId
  }
  //Be sure to add the methods needed to create the view template for this model

  get TaskTemplate() {
    return /**html */`
    <div class="d-flex bg-light shadow-sm border rounded p-3 justify-content-between">
          <h4>${this.name}</h4>
          <button class="btn btn-outline-danger btn-sm" onclick="app.taskController.delete('${this.id}')"><i class="fas fa-minus"></i></button>
    </div>
    `

  }

}
