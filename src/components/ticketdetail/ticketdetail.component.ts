import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../app/services/ticketService/ticket.service";
import {Ticket} from "../../app/ticket";
import {ActivatedRoute, Router} from '@angular/router';
import {Concert} from "../../app/concert";
import {ConcertService} from "../../app/services/concertService/concert.service";
import {timeout} from "rxjs/internal/operators";

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css']
})
export class TicketdetailComponent implements OnInit {

  ticket = <any>[];
  ticketId = '';
  concertId = '';
  concert = <any>[];

  constructor(private ticketService: TicketService, private concertService: ConcertService, private route:ActivatedRoute, private router: Router) { }

  getTicketId(): void {
    this.route.params.subscribe(param => {
      this.ticketId += param['id'];
    })
  }

  getTicket(): void {
    this.ticketService.getTicket(this.ticketId)
      .subscribe((ticket => {
        this.ticket = ticket;
        this.concertId = ticket.concert;
        // console.log("ID" + this.concertId);
      }));
  }

  getConcert(): void {
    this.concertService.getConcert(this.concertId)
      .subscribe((concert => {
          this.concert = concert;
          console.log(concert);
      }))
  }

  goBack() {
    this.router.navigate(["/tickets"]);
  }

  ngOnInit() {
    this.getTicketId();
    this.getTicket();
    this.getConcert();

  }

}
