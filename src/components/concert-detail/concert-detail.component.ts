import { Component, OnInit } from '@angular/core';
import { ConcertComponent } from "../concert/concert.component";
import {ConcertService} from "../../app/services/concertService/concert.service";
import {Concert} from "../../app/concert";
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../app/services/ticketService/ticket.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-concert-detail',
  templateUrl: './concert-detail.component.html',
  styleUrls: ['./concert-detail.component.css']
})
export class ConcertDetailComponent implements OnInit {
  constructor(private concertService: ConcertService, private route:ActivatedRoute, private ticketService: TicketService, private location: Location, private router: Router) { }

  concert: Concert;
  concertId = '';

  ngOnInit() {
    this.getConcertId();
    this.getConcert();
  }

  getConcertId(): void{
    this.route.params.subscribe(param => {
    this.concertId += param['id'];
    });
  }

  goBack() {
    this.location.back();
  }

  getConcert(): void {
    this.concertService.getConcert(this.concertId)
      .subscribe((concert => {
        this.concert = concert;
      }));
  };

  deleteConcert(): void {
    this.concertService.deleteConcert(this.concertId);
    this.router.navigate(["/concerts"]);
  }

  buyTicket(): void {
    console.log("concert: " + this.concertId);
    console.log("username: " + localStorage.getItem("Username"));
    this.ticketService.addTicket(this.concertId, localStorage.getItem("Username"));
  }

}
