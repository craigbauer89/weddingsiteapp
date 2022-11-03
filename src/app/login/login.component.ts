import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string = "craigandbenni@gmail.com";
  password : string = '';
 

  constructor(private firebaseservice: FirebaseService, private router: Router) { }

  

  ngOnInit(): void {
  }

  login() {

    if(this.email == ' ') {
      alert('Please Enter Email');
      return;
    }

    if(this.password == ' ') {
      alert('Please Enter Password');
      return;
    }

   this.firebaseservice.login(this.email, this.password);
   this.email == '';
   this.password == '';
   

  }

}
