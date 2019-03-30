import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ImageSearchComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'dosage' ,'quantity'];
  expandedElement: MedicineRow | null;

  constructor() {
  }


  ngOnInit() {
  }

}

export interface MedicineRow {
  name: string;
  dosage: string;
  quantity: string;
}

const ELEMENT_DATA: MedicineRow[] = [{
  name: 'Perinorm',
  dosage: '10mg',
  quantity: '10'
},
  {
    name: 'Calpol',
    dosage: '500mg',
    quantity: '5'
  },
  {
    name: 'Oflox',
    dosage: '200mg',
    quantity: '10'
  },
  {
    name: 'Aciloc',
    dosage: '150mg',
    quantity: '10'
  }];
