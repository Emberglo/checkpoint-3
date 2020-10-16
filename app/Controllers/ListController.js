import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js";


function _drawLists() { 
  let template = ""
  ProxyState.lists.forEach(l => template += l.ListTemplate)
  document.getElementById('app').innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists();
  }

  create(e) {
    e.preventDefault()

    let form = e.target

    let rawList = {
      title: form.title.value
    }

    listService.create(rawList)

    form.reset()
    
  }

  delete(id) {
    listService.delete(id)
  }
  
}
