import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  email = '';
  name = '';
  password = '';

  myForm = new FormGroup({
    email: new FormControl(null, [
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_.]{3,}@[a-zA-Z]{3,}.com$/),
      Validators.required,
    ]),
    name: new FormControl(null, [
      Validators.pattern(/^[a-zA-Z]{4,}$/),
      Validators.required,
    ]),
    password: new FormControl(null, [
      Validators.pattern(/[a-zA-Z0-9#*_]{8,10}/),
      Validators.required,
    ]),
  });

  allRegisteredUsers: any[] = [];

  ngOnInit(): void {
    let retVal = localStorage.getItem('allUsers');
    if (retVal !== null) {
      this.allRegisteredUsers = JSON.parse(retVal);
      console.log(this.allRegisteredUsers);
    }
  }

  registerUser() {
    let newUser = {
      email: this.myForm.controls['email'].value,
      name: this.myForm.controls['name'].value,
      password: this.myForm.controls['password'].value,
    };
    if (this.myForm.valid) {
      console.log(newUser);
      this.allRegisteredUsers.push(newUser);
      localStorage.setItem('allUsers', JSON.stringify(this.allRegisteredUsers));
      this.myForm.reset();
      this.router.navigate(['/login']);
    } else {
      console.log('Error');
    }
    console.log(this.myForm);
    console.log(this.myForm.controls['email'].value);
    console.log(this.myForm.controls['name'].value);
    console.log(this.myForm.controls['password'].value);
  }

  get emailStatus() {
    return this.myForm.controls['email'].valid;
  }

  get nameStatus() {
    return this.myForm.controls['name'].valid;
  }

  get passwordStatus() {
    return this.myForm.controls['password'].valid;
  }
}
