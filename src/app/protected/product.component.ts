import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import {ProductValidator} from "./product.validator";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myForm: FormGroup;
  backendErrors : any;
  news : any;

  formErrors = {
    'product': '',
    'domen': ''
  };

  constructor(private formBuilder: FormBuilder,
              public router: Router) { }


  ngOnInit() {

    this.myForm = this.formBuilder.group({
      'product': ['',
        [
          Validators.required,
          Validators.minLength(4),
          //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ],
      ],
      'domen': ['', Validators.required],
    });

    this.myForm.statusChanges.subscribe(
        data => this.onValueChanged(data)
    );
  }



  onValueChanged(data?: any) {
    this.backendErrors = '';
    if (!this.myForm) { return; }
    const form = this.myForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = ProductValidator.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }

    }
  }


  onSignin(event):void {

    event.preventDefault();

  }


}
