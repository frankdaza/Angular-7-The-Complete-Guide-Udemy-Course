import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  
  private server: {id: number, name: string, status: string};
  private subscription: Subscription;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
