import { Component, EventEmitter} from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';


// CHILD component based on parent component.
//selector: html element which will be used in parent template so it knows where to load the components kegList array
//template: replaces loop in parent, *ngFor uses a forEach loop to display beer info, name changes from keg(in parent) to currentKeg, taskWasSelected method (in parent) changes to kegClicked method
//inputs: saying "when i grow up, i'll have a property called kegList and it will be an array of info given to me from my parent", []=input
//custom EventEmitter = onKegSelect
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent],
  template: `<keg-display *ngFor="#currentKeg of kegList"
  (click)="kegClicked(currentKeg)"
  [class.selected]= "currentKeg === selectedKeg"
  [keg]="currentKeg"></keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg= clickedKeg;
    this.onKegSelect.emit(clickedKeg)
  }
}
