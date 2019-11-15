import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  transactionControlForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.transactionControlForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.transactionControlForm.value);
  }

}
