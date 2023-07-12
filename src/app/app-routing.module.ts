import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { BusServiceComponent } from './bus-service/bus-service.component';
import { GoodToKnowComponent } from './good-to-know/good-to-know.component';
import { GuardGuard } from './Guard/guard.guard';
import { HomeComponent } from './home/home.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [

  {
    canActivate: [GuardGuard],
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  
  {
    path: 'login',
    component:  LoginComponent
  },
  {
    path: 'register',
    component:  RegisterComponent
  },
  {
    path: 'location',
    canActivate: [GuardGuard],
    component: LocationComponent
  },
  {
    path: 'accomodation',
    canActivate: [GuardGuard],
    component: AccomodationComponent
  },
  {
  path: 'restaurants',
  canActivate: [GuardGuard],
  component: RestaurantsComponent
  },
  {
    path: 'bus',
    canActivate: [GuardGuard],
    component: BusServiceComponent
    },
  {
    path: 'travel',
    canActivate: [GuardGuard],
    component: TravelComponent
  },
  {
    path: 'itinerary',
    canActivate: [GuardGuard],
    component: ItineraryComponent
},
{
  path: 'rsvp',
  canActivate: [GuardGuard],
  component: RsvpComponent
},
{
  path: 'thankyou',
  canActivate: [GuardGuard],
  component: ThankyouComponent
},
  {
    path: 'goodtoknow',
    canActivate: [GuardGuard],
    component: GoodToKnowComponent
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
