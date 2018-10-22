import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSignup() {
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.valid);
  }

}
