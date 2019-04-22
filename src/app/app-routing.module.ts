import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component import
import { ConcertComponent } from "../components/concert/concert.component";
import { ConcertDetailComponent } from "../components/concert-detail/concert-detail.component";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { ArtistComponent } from "../components/artist/artist.component";
import { TicketComponent } from "../components/ticket/ticket.component";
import {ArtistDetailComponent} from "../components/artist-detail/artist-detail.component";
import {TicketdetailComponent} from "../components/ticketdetail/ticketdetail.component";
import { AuthenticationGuardService } from "./services/authenticationGuardService/authentication-guard.service";
import {AddArtistComponent} from "../components/add-artist/add-artist.component";
import {UpdateArtistComponent} from "../components/update-artist/update-artist.component";
import {CreateConcertComponent} from "../components/create-concert/create-concert.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'concerts', component: ConcertComponent, canActivate: [AuthenticationGuardService]},
  {path: 'concertDetail/:id', component: ConcertDetailComponent, canActivate: [AuthenticationGuardService]},
  {path: 'createConcert', component: CreateConcertComponent, canActivate: [AuthenticationGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'artists', component: ArtistComponent, canActivate: [AuthenticationGuardService]},
  {path: 'artists/addArtist', component: AddArtistComponent, canActivate: [AuthenticationGuardService]},
  {path: 'artistDetail/:id', component: ArtistDetailComponent, canActivate: [AuthenticationGuardService]},
  {path: 'tickets', component: TicketComponent, canActivate: [AuthenticationGuardService]},
  {path: 'ticketDetail/:id', component: TicketdetailComponent, canActivate: [AuthenticationGuardService]},
  {path: 'updateArtist/:id', component: UpdateArtistComponent, canActivate: [AuthenticationGuardService]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
