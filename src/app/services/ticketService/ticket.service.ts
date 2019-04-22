import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import { TicketComponent } from "../../../components/ticket/ticket.component";
import {Ticket} from "../../ticket";
import {map} from "rxjs/internal/operators";

const token = localStorage.getItem("Token");

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': token})
};
let url = "https://letzgo.herokuapp.com/api/tickets";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(url, httpOptions).pipe(map (data => data))
  }

  getTicket(ticketId: string): Observable<Ticket> {
    return this.http.get<Ticket>(url + '/' + ticketId, httpOptions).pipe(map(data => data));
  }

  addTicket(concertId, userId) {
    this.http.post(url + '/' + concertId + '/' + userId, httpOptions)
      .subscribe(res => {
        console.log("response:" +res)
      }, error => {
        console.log(error);
      });
  }
}
