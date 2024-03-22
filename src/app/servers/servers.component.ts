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
    allowNewServer : boolean = false;
    serverCreationStatus : string = 'No Server Was Created!';
    serverName : string = '';
    userName: string = ''; // using for Task-2
    serverCreated: boolean = false;
    servers = ['TestServer1', 'TestServer2'];


    constructor() {
      setTimeout(()=>{
        this.allowNewServer = true;
      },2000);
    }

    onCreateServer(){
      this.serverCreated = true
      this.servers.push(this.serverName)
      this.serverCreationStatus = 'Server Was Created! Name is ' + this.serverName
    }

    onDeleteServer(){
      this.serverCreationStatus = 'Server Was Deleted!'
    }

    onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value
    }

    onUserNameEnter(event:Event){
      this.userName = (<HTMLInputElement>event.target).value
    }
}
