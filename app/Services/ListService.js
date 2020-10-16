import { ProxyState } from "../AppState.js"
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

//Public
class ListService {

  constructor() {
    ProxyState.on("lists", saveState)
  }

  create(rawList) {
    let lists = ProxyState.lists
    lists.push(new List(rawList))
    ProxyState.lists = lists
  }

  delete(id) {
    if (confirm("Are you sure?")) {
      ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    }
    
  }

}

export const listService = new ListService();
