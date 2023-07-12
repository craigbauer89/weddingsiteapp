import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  areYouSure = false;
  modifybox = false;
  linate = false;
  bergamo = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.modifybox = false;
    this.linate = false;
    this.bergamo = false;
  
  }

  modifyPartita() {
    this.modifybox = true;
    this.linate = false;
    this.bergamo = false;
 

   }



   linatebox() {
    this.linate = true;
    this.modifybox = false;
    this.bergamo = false;
 

   }

   bergamobox() {
    this.bergamo = true;
    this.modifybox = false;
    this.linate = false;
 
  
 

   }

}
