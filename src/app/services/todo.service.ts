import { Injectable } from '@angular/core';

import { of, identity } from 'rxjs' //importing rxjs lib
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [{
      id: "111",
      Title: "C++",
      isCompleted: true,
      date: new Date()
    },
    {
      id: "222",
      Title: "Learn React",
      isCompleted: true,
      date: new Date()
    },
    {
      id: "333",
      Title: "Learn Angular",
      isCompleted: false,
      date: new Date()
    }]
  }

  getTodos() {
    return of(this.todos)
  }

  addTodos(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodos(todo: Todo) {
    this.todos.map(singleTodo => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }
  deleteTodos(todo: Todo) {
    const IndexOf = this.todos.findIndex(
      (currentObj) => {
        currentObj.id === todo.id
      })

    this.todos.splice(IndexOf, 1);
  }
}
