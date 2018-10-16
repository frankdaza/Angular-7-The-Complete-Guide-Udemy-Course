import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
        email: new FormControl('', [Validators.email, Validators.required], this.forbiddenEmails)
      }),      
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    this.signupForm.statusChanges.subscribe(value => {
      console.log(value);
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

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'frank.daza2@gmail.com') {
          resolve({ emailIsForbidden: true});
        } else {
          resolve(false);
        }
      }, 2000);
    });
    return promise;
  }

}
