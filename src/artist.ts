export class Artist {
  id: string;
  name: string;
  picture: string;
  genre: string;
  description: string;
  discography: {title: string, releaseYear: string}[];
  concerts: {}[];

}
