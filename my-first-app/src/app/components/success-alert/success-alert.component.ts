import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  public message: string = 'Success alert from Angular 6!'

  constructor() { }

  ngOnInit() {
  }

}
