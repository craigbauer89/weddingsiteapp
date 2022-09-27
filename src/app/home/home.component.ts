import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService, private router: Router) { }

  ngOnInit(): void {

    
    this.firebaseservice.printall();
  }


  logout() {

    this.firebaseservice.logout();

    
  }

  isLoggedIn() {

var cat = localStorage.getItem('user');

    // window.alert(cat);

    if(this.firebaseservice.isLoggedIn()) {
      // window.alert(JSON.stringify(cat));
      window.alert(cat);
    }
  }

}
