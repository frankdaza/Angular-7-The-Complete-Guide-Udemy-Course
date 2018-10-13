import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  
  private server: {id: number, name: string, status: string};
  private serverName = '';
  private serverStatus = '';
  private subscription: Subscription;

  constructor(
    private serversService: ServersService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.activedRoute.params.subscribe(
      params => {
        console.log(params['id']);
      }
    );

    this.subscription = this.activedRoute.queryParams.subscribe(
      params => {
        console.log(params);
      }
    );

    this.subscription = this.activedRoute.fragment.subscribe(
      params => {
        console.log(params);
      }
    );

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
