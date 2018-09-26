import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  public message: string = 'Warning alert from Angular 6!'

  constructor() { }

  ngOnInit() {
  }

}
