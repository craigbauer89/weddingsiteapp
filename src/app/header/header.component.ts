import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService, ) { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    //
    const checkbox = document.getElementById(
      'menuButton',
    ) as HTMLInputElement | null;
    
    // window.alert('anchor tag is Clicked');
    if (checkbox != null) {
      checkbox.checked = false;
    }
    }

    logout() {

      this.firebaseservice.logout();
  
      
    }

}
