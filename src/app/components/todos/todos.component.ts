import { Component, OnInit } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {TodoService} from '../../services/todo.service'
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  faTrashAlt = faTrashAlt;
  
  constructor(private TodoServices: TodoService) { }

  ngOnInit(): void {
    this.TodoServices.getTodos().subscribe(todos =>{
      this.todos = todos;
    })
  }

  ChangeTodos(Todos: Todo){
    this.TodoServices.updateTodos(Todos);
  
  }

  DeleteTodos(Todos: Todo){
    this.TodoServices.deleteTodos(Todos);

  }

}
