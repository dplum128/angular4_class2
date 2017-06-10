import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  inputHint: string = 'What needs to be done?';
  inputItem = '';

  todos: any[] = [];

  addTodos(input: string) {
    console.log(input);
    // if (input !== '') {
    //   this.todos.push(input);
    // }
    this.todos = [...this.todos, input];
    console.log(this.todos);
  }

  inputWord(input: string) {
    this.inputItem = input;
  }
}
