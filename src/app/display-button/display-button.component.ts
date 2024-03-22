import { Component } from '@angular/core';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styles:[`
    .white {
      color: white;
    }
  `]
})
export class DisplayButtonComponent {
  SecretPassword = false;
  date = Date.now()
  logArray = [];


  onButtonClick(){
    this.SecretPassword = !this.SecretPassword;
    // this.logArray.push(this.logArray.length + 1)
    this.logArray.push(new Date())
  }
}

