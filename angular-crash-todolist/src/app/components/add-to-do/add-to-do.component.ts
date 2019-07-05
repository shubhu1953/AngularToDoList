import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  title : string;
  @Output() addToDo : EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const todo = {
      title : this.title,
      completed : false
    }
    this.addToDo.emit(todo);
  }

}
