import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authenticationService/authentication.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainHeading = 'LetzGo';
  title = 'letzgo';


  constructor(private authenticationService: AuthenticationService, private location: Location) {
  }


  logoutUser(): void {
    this.authenticationService.logout();
    window.alert("Logged out succesfully");
    this.location.back();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isAuthenticated();
  }
}
