import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../app/services/artistService/artist.service";
import {Artist} from "../../artist";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  artistArray: Artist[];

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => {
        this.artistArray = artists;
        console.log(this.artistArray);
      })
  }

  ngOnInit() {
    this.getArtists();
  }

}
