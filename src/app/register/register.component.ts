import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  email : string = '';
  password : string = '';

  constructor(private firsebaseservice: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {

    if(this.email == ' ') {
      alert('Please Enter Email');
      return;
    }

    if(this.password == ' ') {
      alert('Please Enter Password');
      return;
    }

   this.firsebaseservice.register(this.email, this.password);
   this.email == '';
   this.password == '';
   this.router.navigate(['login']);

  }

}
