import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'My tasks';

  constructor() {
    this.todos.push(new Todo(1, 'study angular', false));
    this.todos.push(new Todo(2, 'study csharp', false));
    this.todos.push(new Todo(3, 'go shopping', false));
  }

}
