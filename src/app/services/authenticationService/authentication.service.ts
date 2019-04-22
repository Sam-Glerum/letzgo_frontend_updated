import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {
  private apiUrl = "https://letzgo.herokuapp.com/api";
  private httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }


  register(username: string, email: string, password: string, dateofbirth: Date) {
    console.log("User " + username + " has been registered");
    this.http.post<any>(this.apiUrl + '/register', {
      username: username,
      email: email,
      password: password,
      dateofbirth: dateofbirth
    })
      .subscribe((res) => {
        localStorage.setItem("Token", res.token);
      },
        error => {
        console.log(error);
        })
  }

  loginUser(username: string, password: string){
    console.log("Login: " + username + " has been logged in");
    this.http.post<any>(this.apiUrl + '/login', {username: username, password: password})
      .subscribe((res) => {
          localStorage.setItem("Token", res.token);
          localStorage.setItem("Username", username);
        },
        (error) => console.log(error)
      );
  }


  logout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("Username");

  }

  getToken() {
    return localStorage.getItem("Token");
  }

  isAuthenticated() {
    return localStorage.getItem("Token") !== null;
  }
}
