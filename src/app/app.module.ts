import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule } from '@angular/forms';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { GoodToKnowComponent } from './good-to-know/good-to-know.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { LocationComponent } from './location/location.component';
import { TravelComponent } from './travel/travel.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { GuardGuard } from './Guard/guard.guard';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BusServiceComponent } from './bus-service/bus-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AccomodationComponent,
    GoodToKnowComponent,
    ItineraryComponent,
    LocationComponent,
    TravelComponent,
    RsvpComponent,
    ThankyouComponent,
    RestaurantsComponent,
    BusServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth())
  ],
  providers: [FirebaseService,GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
