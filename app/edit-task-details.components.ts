import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <h3>Edit Description: {{ keg.name }}</h3>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
