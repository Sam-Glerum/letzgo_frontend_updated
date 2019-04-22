import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArtistService} from "../../app/services/artistService/artist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Artist} from "../../artist";

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.css']
})
export class UpdateArtistComponent implements OnInit {

  artist: Artist;
  artistId = '';

  artistName = '';
  artistPicture = '';
  artistGenre = '';
  artistDescription = '';

  artistForm = new FormGroup({
    name: new FormControl(this.artistName),
    picture: new FormControl(this.artistPicture),
    genre: new FormControl(this.artistGenre),
    description: new FormControl(this.artistDescription),
  });

  constructor(private artistService: ArtistService, private route:ActivatedRoute, private router: Router) { }

  getArtistId() {
    this.route.params.subscribe(param => {
      this.artistId = param['id'];
    });
  }

  getArtist(): void {
    this.artistService.getArtist(this.artistId)
      .subscribe(artist => {
        this.artist = artist;

        this.artistName = this.artist.name;
        this.artistPicture = this.artist.picture;
        this.artistGenre = this.artist.genre;
        this.artistDescription = this.artist.description;
      });
  }


  updateArtist(): void {
    let name = this.artistForm.controls.name.value;
    let picture = this.artistForm.controls.picture.value;
    let genre = this.artistForm.controls.genre.value;
    let description = this.artistForm.controls.description.value;
    this.artistService.updateArtist(this.artistId, name, picture, genre, description, "", "");
    // this.router.navigate(["/artists/" + this.artistId]);
    this.router.navigate(["/artistDetail/" + this.artistId]);

  }

  ngOnInit() {
    this.getArtistId();
    this.getArtist();
  }

}
