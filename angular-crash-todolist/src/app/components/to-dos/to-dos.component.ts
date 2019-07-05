import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../Models/ToDo';
import {ToDoService} from '../../services/to-do.service'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos : ToDo[];

  constructor(private todoService:ToDoService) { }
  
  ngOnInit() {
    this.todoService.getToDos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteToDo(todo:ToDo){
    this.todos = this.todos.filter(t => t.id != todo.id);
    this.todoService.deleteToDo(todo).subscribe();
  }

  addToDo(todo : ToDo){
    this.todoService.addToDo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
