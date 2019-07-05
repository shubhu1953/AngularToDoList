import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/Models/ToDo';
import {ToDoService} from '../../services/to-do.service'

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo : ToDo;
  @Output() deleteToDo: EventEmitter<ToDo> = new EventEmitter();
  constructor(private todoService : ToDoService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
  OnToggle(todo){
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  OnDelete(todo){
    this.deleteToDo.emit(todo);
  }

}
