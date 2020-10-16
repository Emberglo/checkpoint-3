import ListController from "./Controllers/ListController.js"
import TaskController from "./Controllers/TaskController.js"
import {loadState} from "./Utils/LocalStorage.js"

// const { default: ListController } = require("./Controllers/ListController");

class App {
  // TODO load your controllers here
  listController = new ListController()
  taskController = new TaskController()
}

window["app"] = new App();
loadState()
