import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConcertService} from '../../app/services/concertService/concert.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistService} from '../../app/services/artistService/artist.service';
import {Concert} from '../../app/concert';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styleUrls: ['./update-concert.component.css']
})
export class UpdateConcertComponent implements OnInit {

  concertId = '';
  concert: Concert;

  concertName = '';
  concertDate: Date;
  concertCity = '';
  concertStreet = '';
  concertHouseNumber = '';
  concertZipCode = '';
  concertPrice: number;
  concertDescription = '';
  concertArtists = <any>[];


  concertForm = new FormGroup({
    name: new FormControl(this.concertName),
    date: new FormControl(this.concertDate),
    city: new FormControl(this.concertCity),
    street: new FormControl(this.concertStreet),
    houseNumber: new FormControl(this.concertHouseNumber),
    zipCode: new FormControl(this.concertZipCode),
    price: new FormControl(this.concertPrice),
    description: new FormControl(this.concertDescription),
    artists: new FormControl(this.concertArtists)
  });

  constructor(private concertService: ConcertService, private route:ActivatedRoute, private artistService: ArtistService, private router: Router) { }

  getConcertId() {
    this.route.params.subscribe(param => {
      this.concertId = param['id'];
    });
  }

  getConcert() {
    this.concertService.getConcert(this.concertId)
      .subscribe((concert) => {
        this.concert = concert;

        this.concertName = this.concert.name;
        this.concertDate = this.concert.date;
        this.concertCity = this.concert.city;
        this.concertStreet = this.concert.street;
        this.concertHouseNumber = this.concert.houseNumber;
        this.concertZipCode = this.concert.zipCode;
        this.concertPrice = this.concert.price;
        this.concertDescription = this.concert.description;
        this.concertArtists = this.concert.artists;
      })
  }


  updateConcert() {
    let name = this.concertForm.controls.name.value;
    let date = this.concertForm.controls.date.value;
    let city = this.concertForm.controls.city.value;
    let street = this.concertForm.controls.street.value;
    let houseNumber = this.concertForm.controls.houseNumber.value;
    let zipCode = this.concertForm.controls.zipCode.value;
    let price = this.concertForm.controls.price.value;
    let description = this.concertForm.controls.description.value;
    let artists = this.concertForm.controls.artists.value;

    this.concertService.updateConcert(this.concertId, name, date, city, street, houseNumber, zipCode,
      price, description, artists);

    this.router.navigate(["/concerts"]);
  }

  ngOnInit() {
    this.getConcertId();
    this.getConcert();
  }

}
