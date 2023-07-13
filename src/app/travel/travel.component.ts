import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {


  hidemap = false
  bigscreen = true;
  areYouSure = false;
  modifybox = false;
  linate = false;
  bergamo = false;

  constructor() { }

  ngOnInit(): void {
    this.hidemap = false;
    close()

    if (window.innerWidth >= 1000) {
      this.bigscreen = true;
    } else {
      this.bigscreen = false;
    }

    
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.bigscreen = window.innerWidth >= 1000; // Set the desired screen width breakpoint
 
  }

  close() {
    this.modifybox = false;
    this.linate = false;
    this.bergamo = false;
    this.hidemap = false
  
  }

  modifyPartita() {
    this.modifybox = true;
    this.linate = false;
    this.bergamo = false;
    if (this.bigscreen) {
      this.hidemap = false;
    }else {
      this.hidemap = true;
    }
   }



   linatebox() {
    this.linate = true;
    this.modifybox = false;
    this.bergamo = false;
    if (this.bigscreen) {
      this.hidemap = false;
    }else {
      this.hidemap = true;
    }
   }

   bergamobox() {
    this.bergamo = true;
    this.modifybox = false;
    this.linate = false;
    if (this.bigscreen) {
      this.hidemap = false;
    }else {
      this.hidemap = true;
    }
   }

}
