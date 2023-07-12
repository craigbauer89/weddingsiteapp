import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('infoButton', { static: false }) infoButton!: ElementRef<HTMLInputElement>;


  constructor(private firebaseservice: FirebaseService, ) { }

  isChecked = false;
  isCheckedMobile = false;

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.isChecked = false;
    this.isCheckedMobile = false;
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
