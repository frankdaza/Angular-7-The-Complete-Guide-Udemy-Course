import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { CanComponentDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  
  private server: {id: number, name: string, status: string};
  private serverName = '';
  private serverStatus = '';
  private subscription: Subscription;
  private allowEdit: boolean;
  private changesSaved: boolean;

  constructor(
    private serversService: ServersService,
    private activedRoute: ActivatedRoute,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.allowEdit = false; 
    this.changesSaved = false;

    this.subscription = this.activedRoute.queryParams.subscribe(
      params => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    );

    this.subscription = this.activedRoute.params.subscribe(
      params => {        
        this.server = this.serversService.getServer(+params['id']);
      }
    );

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    if (this.subscription !== null && this.subscription !== undefined)
      this.subscription.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(
      this.server.id, {
        name: this.serverName, 
        status: this.serverStatus
    });
    this.changesSaved = true;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changesSaved) {
        return this.dialogService.confirm('Discard changes?');
    } else {
      return true;
    } 
  }

}
