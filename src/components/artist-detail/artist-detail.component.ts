import { Component, OnInit } from '@angular/core';
import {Artist} from "../../artist";
import {ArtistService} from "../../app/services/artistService/artist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  artistId = '';

  constructor(private artistService: ArtistService, private route:ActivatedRoute, private router: Router) {
  }

  getArtistId() {
    this.route.params.subscribe(param => {
      this.artistId = param['id'];
    });
  }

  getArtist(): void {
    this.artistService.getArtist(this.artistId)
      .subscribe(artist => {
        this.artist = artist;
      });
  }
  deleteArtist() {
    this.artistService.deleteArtist(this.artistId);
    this.router.navigate(["/artists"]);
  }

  openUpdateArtist() {
    this.router.navigate(["/updateArtist"]);
  }

  ngOnInit() {
    this.getArtistId();
    this.getArtist();
  }

}
