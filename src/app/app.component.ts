import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

newTodo: Todo = new Todo();

 constructor(private TodoDataService: TodoDataService){

 }

 toggleTodoComplete(todo){
   this.TodoDataService.toggleTodoComplete(todo);
 }

 addTodo(){
   this.TodoDataService.addTodo(this.newTodo);
   this.newTodo = new Todo();
 }

 removeTodo(todo){

 }


}
