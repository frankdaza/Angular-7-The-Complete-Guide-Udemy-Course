import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  } 

  ngOnDestroy() {
    if (this.subscription !== undefined
        && this.subscription !== null)
      this.subscription.unsubscribe();
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], 
    {queryParams: {allowEdit: '1'},
  fragment: 'loading'});
  }

  onLogin() {
    this.subscription = this.authService.login().subscribe(data => {
      console.log(data);
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
