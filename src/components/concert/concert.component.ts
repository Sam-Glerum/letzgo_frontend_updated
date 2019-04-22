import { Component, OnInit } from '@angular/core';
import { ConcertService } from "../../app/services/concertService/concert.service";
import {Concert} from "../../app/concert";

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  constructor(private concertService: ConcertService) {
  }
  concertsArray: Concert[];


  getConcerts(): void {
    this.concertService.getConcerts()
      .subscribe(concerts => {
        this.concertsArray = concerts;
      });
  }

  ngOnInit() {
    this.getConcerts();

  }

}
