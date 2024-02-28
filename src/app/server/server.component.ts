import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(status){
    return this.serverStatus = status
  }
}
