import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.user = {
        id: params['id'],
        name: params['name']
      }
    });
    
  }

}
