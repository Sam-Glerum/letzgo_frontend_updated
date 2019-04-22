import { Component, OnInit } from '@angular/core';
import { Ticket } from "../../app/ticket";
import {TicketService} from "../../app/services/ticketService/ticket.service";
import {ConcertService} from '../../app/services/concertService/concert.service';
import {Concert} from '../../app/concert';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private concertService: ConcertService) { }

  ticketsArray =  <any>[];
  concertArray = <any>[];
  concertTitle: string;

  getTickets(): void {
    this.ticketService.getTickets()
      .subscribe(tickets => {
        this.ticketsArray = tickets;
        console.log(this.ticketsArray);
      })
  }

  getConcerts() {
    this.concertService.getConcerts()
      .subscribe((concerts) => {
        this.concertArray = concerts;
      })
  }

  getConcert(concertId): Concert {
    let newConcert : Concert;
    this.concertService.getConcert(concertId)
      .subscribe((concert) => {
        newConcert = concert;
        return newConcert;
      });

  }

  ngOnInit() {
    this.getTickets();
    this.getConcerts();
  }

}
