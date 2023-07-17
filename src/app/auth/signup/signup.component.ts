import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isActive = true;

  constructor(private formBuilder: FormBuilder, private regService: RegistrationService, private router: Router) { }
  countries = [
    {
      "countryId": 1,
      "countryName": "India"
    },
    {
      "countryId": 2,
      "countryName": "Canada"
    },
    {
      "countryId": 3,
      "countryName": "Japan"
    },
    {
      "countryId": 4,
      "countryName": "Singapore"
    },
    {
      "countryId": 5,
      "countryName": "United States"
    },
    {
      "countryId": 6,
      "countryName": "United Kingdom"
    },
    {
      "countryId": 6,
      "countryName": "Australia"
    },
    {
      "countryId": 5,
      "countryName": "Germany"
    }
  ]
  // phonePattern = '^((\\+91-?)|0)?[0-9]{10}$';
  //   passwordRegexp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  //   usernameRegexp = new RegExp('/\s/');

  userForm: any;
  public myData = ""
  public myKeys: any = [];

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      "firstName": ['', [Validators.required, Validators.pattern('^[a-zA-Z\s]{5,15}$')]],
      "userEmail": ["", Validators.compose([Validators.required, Validators.email])],
      "password": ['', Validators.required],
      "phonenumber": ["", Validators.compose([Validators.required, Validators.minLength(5)])],
      "countries": ['', Validators.required],
      "description": ['', [Validators.required, Validators.minLength(4)]],
      "date": ['', Validators.required],
    })
  }

  onSubmit(value: any) {
    this.myData = JSON.stringify(value);
    localStorage.setItem('key', this.myData);
    this.myKeys.push(JSON.parse(localStorage.getItem('key')));
    console.log(this.myKeys);
    this.userForm.reset();
    // Save the registration data in the service
    // this.regService.saveRegistrationData(this.userForm)
    // this.router.navigate(['/login']);
  }

  editUser() {
    // alert('edit user is working...');
  }

  deleteUser(key: any) {
    const index = this.myKeys.indexOf(key);
    if (index > -1) {
      this.myKeys.splice(index, 1);
    }
  }
}
