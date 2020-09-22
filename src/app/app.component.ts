import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'My tasks';

  constructor() {
    this.todos.push('study angular');
    this.todos.push('study csharp');
    this.todos.push('go shopping');
  }

  changeText() {
    this.title = 'Title changed'
  }
}
