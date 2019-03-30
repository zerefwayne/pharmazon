import { Component, OnInit } from '@angular/core';
import {MedicineShort} from '../../medicine-short.model';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.sass']
})
export class TextSearchComponent implements OnInit {

  constructor() { }

  medicines: MedicineShort[] = [];

  ngOnInit() {
  }

  getMedicines() {




  }



}
