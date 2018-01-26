import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { color: red; }']
})
export class HelloWorldComponent {
  title = 'Hello World';
}
