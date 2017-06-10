import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  inputHint: string = 'What needs to be done?';
  inputItem: string;

  todos: any[] = [];

  addTodos(input: string) {
    if (input) {
      // this.todos = [...this.todos, input.value];
      console.log(input);
      this.todos.push(input);
      input = '';
      this.inputItem = input;
    }
    console.log(this.todos);
  }

  addTodos2() {
    if (this.inputItem) {
      this.todos = [...this.todos, this.inputItem];
      this.inputItem = '';
    }
  }

  inputWord(input: string) {
    this.inputItem = input;
  }
}
