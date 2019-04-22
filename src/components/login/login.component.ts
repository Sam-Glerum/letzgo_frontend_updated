import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../app/services/authenticationService/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
});

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private location: Location, private router: Router) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

  onSubmit() {
    let username = this.profileForm.controls.username.value;
    let password = this.profileForm.controls.password.value;
    this.authenticationService.loginUser(username, password);
    this.router.navigate(["/concerts"]);
    // this.authenticationService.loginUser(this.profileForm.controls['username'].value, this.profileForm.controls['password'].value);
  }

}
