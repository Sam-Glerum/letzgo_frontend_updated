import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../app/services/authenticationService/authentication.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    dateofbirth: new FormControl('')
  });

  constructor(private authenticationService: AuthenticationService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    let username = this.registerForm.controls.username.value;
    let email = this.registerForm.controls.email.value;
    let password = this.registerForm.controls.password.value;
    let repeatPassword = this.registerForm.controls.repeatPassword.value;
    let dateofbirth = this.registerForm.controls.dateofbirth.value;

    if (password === repeatPassword) {
      this.authenticationService.register(username, email, password, dateofbirth);
      this.location.back();
    } else {
      window.alert("Passwords do not match");
    }

  }

}
