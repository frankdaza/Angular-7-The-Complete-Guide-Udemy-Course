import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  
  private user: {id: number, name: string};
  private subscription: Subscription;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.router.params.subscribe(params => {
      this.user = {
        id: params['id'],
        name: params['name']
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
