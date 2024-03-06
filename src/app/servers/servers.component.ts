import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // template: `
  //   <app-server/>
  //   <app-server/>`,
  templateUrl:'./servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No Server Was Created!';
    serverName = 'TestServer';
    userName = '';
    isEmptyUserName = true;

    constructor() {
      setTimeout(()=>{
        this.allowNewServer = true;
      },2000)
    }

    onCreateServer(){
      this.serverCreationStatus = 'Server Was Created! Name is ' + this.serverName
    }

    onDeleteServer(){
      this.serverCreationStatus = 'Server Was Deleted!'
    }

    onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value
    }

    onUserNameEnter(event:Event){
      this.isEmptyUserName = false
      this.userName = (<HTMLInputElement>event.target).value
    }

    onResetUserName(){
      this.userName = ''
    }
}
