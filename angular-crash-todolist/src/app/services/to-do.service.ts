import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { ToDo } from '../Models/ToDo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.todosUrl);
  }

  toggleCompleted(todo : ToDo): Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions);
  }

  deleteToDo(todo : ToDo) : Observable<ToDo>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<ToDo>(url,httpOptions);
  }

  addToDo(todo : ToDo) : Observable<ToDo>{
    return this.http.post<ToDo>(this.todosUrl,todo,httpOptions);
  }
}
