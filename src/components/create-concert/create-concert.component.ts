import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ConcertService} from "../../app/services/concertService/concert.service";
import {Router} from "@angular/router";
import {ArtistService} from "../../app/services/artistService/artist.service";
import {Artist} from "../../artist";

@Component({
  selector: 'app-create-concert',
  templateUrl: './create-concert.component.html',
  styleUrls: ['./create-concert.component.css']
})
export class CreateConcertComponent implements OnInit {

  concertForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    houseNumber: new FormControl(''),
    zipCode: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    artists: new FormControl('')
  });

  artistArray: Artist[];
  artist: Artist;

  constructor(private concertService: ConcertService, private artistService: ArtistService, private router: Router) { }

  fillArtistArray() {
    this.artistService.getArtists()
      .subscribe(artists => {
        this.artistArray = artists;
      })
  }

  addConcertToArtist(artist, concertName) {
    this.artistService.updateArtist(
      artist.id,
      artist.name,
      artist.picture,
      artist.genre,
      artist.description,
      artist.discography,
      concertName)
  }

  addConcert() {
    let name = this.concertForm.controls.name.value;
    let date = this.concertForm.controls.date.value;
    let city = this.concertForm.controls.city.value;
    let street = this.concertForm.controls.street.value;
    let houseNumber = this.concertForm.controls.houseNumber.value;
    let zipCode = this.concertForm.controls.zipCode.value;
    let price = this.concertForm.controls.price.value;
    let description = this.concertForm.controls.description.value;
    let artists = this.concertForm.controls.artists.value;

    this.concertService.createConcert(
      name, date, city, street, houseNumber, zipCode,
      price, description, artists
    );

    for (let artist of this.artistArray) {
      this.addConcertToArtist(artist, name);
    }

    this.router.navigate(["/concerts"])
  }

  ngOnInit() {
    this.fillArtistArray();
  }

}
