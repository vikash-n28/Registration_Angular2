import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
      dateAdapter.setLocale('de-DE');
    }
  

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
   
  mobileFormControl = new FormControl('',[
    Validators.required,
    Validators.pattern(MOBILE)]);

}
