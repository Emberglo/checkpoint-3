import { generateId } from "../Utils/GenerateId.js";
import List from "./List.js";


export default class Task {
  constructor(data) {
    this.taskName = data.taskName
    this.id = data.id || generateId();
    this.listId = data.listId
  }

  get TaskTemplate() {

    return /*html*/`<div class="d-flex bg-light shadow-sm border rounded p-3 justify-content-between">
          <h4>${this.taskName}</h4>
          <button class="btn btn-danger btn-sm" onclick="app.taskController.delete('${this.id}')"><i class="fas fa-minus"></i></button>
    </div>
    `

  }

}
