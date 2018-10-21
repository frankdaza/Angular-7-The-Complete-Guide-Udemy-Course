import { Component, OnDestroy } from '@angular/core';
import { ServerService } from './server.service';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  subscription: Subscription;

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(
    private serverService: ServerService
  ) {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription !== null && this.subscription !== undefined)
      this.subscription.unsubscribe();
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.subscription = this.serverService.storeServers(this.servers)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  onGet() {
    this.subscription = this.serverService.getServers()
      .subscribe((servers: Array<any>) => {        
        console.log(servers);
      }, error => {
        console.log(error);
      });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
