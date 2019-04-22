import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArtistService} from "../../app/services/artistService/artist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  artistForm = new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private artistService: ArtistService, private router: Router) { }

  addArtist() {
    let name = this.artistForm.controls.name.value;
    let imageUrl = this.artistForm.controls.imageUrl.value;
    let genre = this.artistForm.controls.genre.value;
    let description = this.artistForm.controls.description.value;
    this.artistService.addArtist(name, imageUrl, genre, description);
    this.router.navigate(["/artists"])
  }

  ngOnInit() {
  }

  // onSubmit() {
  //   let name = this.artistForm.controls.name.value;
  //   let imageUrl = this.artistForm.controls.imageUrl.value;
  //   let genre = this.artistForm.controls.genre.value;
  //   let description = this.artistForm.controls.description.value;
  //   this.artistService.addArtist(name, imageUrl, genre, description);
  //   this.router.navigate(["/artists"])
  // }

}
