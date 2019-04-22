import { Artist } from "../artist";

export class Concert {
  id: string;
  name: string;
  date: Date;
  city: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  price: number;
  description: string;
  artists: Artist[];
}
