import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinform', {static: false}) signinform: NgForm;
  username = 'Leela';
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signinform);
  }




}
