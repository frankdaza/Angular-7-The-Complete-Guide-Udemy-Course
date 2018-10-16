import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  listForbiddenNames = ['Frank', 'Vanessa'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', [this.forbiddenNames.bind(this), Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required])
      }),      
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(`Valid form: ${this.signupForm.valid}`);
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.listForbiddenNames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }

    return null;
  }

}
