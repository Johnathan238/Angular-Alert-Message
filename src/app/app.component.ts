import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  firstName = ''
  lastName = ''
  string1 = ''
  alertMessage(){
    alert(`Hello ${this.firstName}, ${this.lastName} `)
    console.log(this.firstName)
  }
}
