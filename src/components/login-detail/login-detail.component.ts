import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../../app/services/authenticationService/authentication.service";



@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.css']
})
export class LoginDetailComponent implements OnInit {
  loggedInUser = this.isLoggedIn();
  username = '';

  constructor(private authenticationService: AuthenticationService) {
    this.setIsLoggedInInfo();
  }


  setIsLoggedInInfo(): void {
    // if (this.authenticationService.isAuthenticated()) {
    if (this.isLoggedIn()) {
      this.username += localStorage.getItem("Username");
    }
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isAuthenticated();
  }


  ngOnInit() {
  }

}
