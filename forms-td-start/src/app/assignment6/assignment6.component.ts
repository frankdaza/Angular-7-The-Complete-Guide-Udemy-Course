import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {

  @ViewChild('form')
  myform: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  constructor(

  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Valid Form: ${this.myform.form.valid}`);
    console.log(this.myform.form.value);
  }

}
