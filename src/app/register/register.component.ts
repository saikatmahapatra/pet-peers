import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ValidationService } from '../services/validation.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ValidationService, ApiService]
})
export class RegisterComponent implements OnInit {

  myForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    email: ['', [Validators.required, this.validator.validEmail]],
    password: ['', [Validators.required, this.validator.matchValidator('confirmPassword', true)]],
    confirmPassword: ['', [Validators.required, this.validator.matchValidator('password')]],
  });

  constructor(private fb: FormBuilder, private validator: ValidationService, private apiSvc : ApiService) {
  }

  ngOnInit(): void {
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


  onSubmit() {
    console.log('onSubmit===', this.myForm);
    if (this.myForm.valid) {
      console.log('form submitted', this.myForm.value);
      this.apiSvc.registerUser(this.myForm.value);
    } else {
      this.validateAllFormFields(this.myForm);
    }
  }

}
