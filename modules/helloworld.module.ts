import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './helloworld.component';


@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule { }
