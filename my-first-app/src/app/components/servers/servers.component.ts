import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public allowNewServer: boolean = false;
  public serverCreationStatus: string = 'No server was created!';
  public serverName: string;
  public isServerCreated: boolean;
  public servers: Array<string>;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
    this.isServerCreated = false;
    this.servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4', 'Server 5'];
  }

  onCreatedServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
