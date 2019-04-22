import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Artist} from "../../../artist";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

const token = localStorage.getItem("Token");

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': token})
    }
  }

  getArtists(): Observable<any> {
    return this.http.get<any>('https://letzgo.herokuapp.com/api/artists', this.httpOptions).pipe(map (data => data))
  }

  getArtist(artistId: string): Observable<any> {
    return this.http.get<any>('https://letzgo.herokuapp.com/api/artists/' + artistId, this.httpOptions).pipe(map(data => data));
  }

  addArtist(name: string, imageUrl: string, genre: string, description: string){
    this.http.post<any>('https://letzgo.herokuapp.com/api/artists', {
      "name": name,
      "picture": imageUrl,
      "genre": genre,
      "description": description,
      "discography": null
    }, this.httpOptions).subscribe((artist) => {
      console.log("Artist " + artist + " has been created");
    })
  }

  updateArtist(artistId: string, name: string, picture: string, genre: string, description: string, discography: string, concert: string) {
    this.http.put('https://letzgo.herokuapp.com/api/artists/' + artistId, {
      "name": name,
      "picture": picture,
      "genre": genre,
      "description": description,
      "discography": null,
      "concerts": concert
    }, this.httpOptions).subscribe((artist) => {
      console.log("Updated artist " + artist);
    })
  }

  deleteArtist(artistId: string) {
    this.http.delete<any>( 'https://letzgo.herokuapp.com/api/artists/' + artistId, this.httpOptions).subscribe((artist ) => {
      console.log("artist " + artist + " deleted");
    });
  }
}
