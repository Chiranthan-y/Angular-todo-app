import { Component, OnInit} from '@angular/core';
import {v4 as uuidV4} from 'uuid'
import {TodoService} from '../../services/todo.service'
import {Todo} from '../../models/Todo'



@Component({
  selector: 'app-todo-forms',
  templateUrl: './todo-forms.component.html',
  styleUrls: ['./todo-forms.component.css']
})
export class TodoFormsComponent implements OnInit {
  
  todoTitle: string ;
  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
  }

  handelClick()
  {
    const newTodo: Todo = {
      id: uuidV4(),
      Title: this.todoTitle,
      isCompleted: false,
      date: new Date()
    } 
    this.TodoService.addTodos(newTodo);
    this.todoTitle='';



  }

}
