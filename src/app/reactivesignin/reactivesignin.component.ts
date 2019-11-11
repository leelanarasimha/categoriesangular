import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactivesignin',
  templateUrl: './reactivesignin.component.html',
  styleUrls: ['./reactivesignin.component.css']
})
export class ReactivesigninComponent implements OnInit {

  signinForm;
  constructor() { }

  ngOnInit() {

    this.signinForm = new FormGroup({
      'userdata': new FormGroup({
        username: new FormControl('', [Validators.required, this.retrictedusername]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      hobbies: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    })
  }

  onSubmit() {
    console.log(this.signinForm);
  }

  onAddHobby() {
    let hobby = new FormControl(null, [Validators.required]);
    this.signinForm.get('hobbies').push(hobby);
  }

  retrictedusername(control: FormControl) {
    if (control.value === 'Leela') {
      return {restrictedname: true};
    }
    return null;
  }

}
