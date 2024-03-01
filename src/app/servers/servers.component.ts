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
    serverName = '';

    constructor() {
      setTimeout(()=>{
        this.allowNewServer = true;
      },2000)
    }

    onCreateServer(){
      this.serverCreationStatus = 'Server Was Created!'
    }

    onDeleteServer(){
      this.serverCreationStatus = 'Server Was Deleted!'
    }

    onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value
    }
}
