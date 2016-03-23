import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
 selector: 'my-app',
 template: `
   <div class= "container">
   <h1>track your beers</h1>
   <h3*ngFor="#keg of kegs">{{ kegs.name }}</h3>
   </div>
 `
})

export class AppComponent {
  public kegs : Keg[];
  constructor(){
    this.kegs = [
      new Keg("Lager", "Rainier", 2, .04),
      new Keg("Lager", "Narragansett", 3, .045),
      new Keg("Lager", "Schaefer", 3, .04),
      new Keg("Lager", "National Bohemian", 3, .04),
      new Keg("Lager", "Black Label", 2, .04)
    ];
  }
  // kegWasSelected(clickedKeg: Keg):
  // void {
  //   console.log(clickedKeg);
  // }
}
