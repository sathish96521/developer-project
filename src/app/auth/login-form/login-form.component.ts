import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    if (this.loginForm.invalid) {
      return
    }

    const credentials = this.loginForm.value;
    this.http.post('https://subdomain.onelogin.com/api/1/verify_factor', credentials).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);

      }
    )
    this.router.navigate(['/dashboard']);
  }
}
