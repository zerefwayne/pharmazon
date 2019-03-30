import { Component, OnInit } from '@angular/core';
import { MedicineShort } from '../../medicine-short.model';
import axios from 'axios';
import {MedicineService} from '../../services/medicine.service';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.sass']
})
export class TextSearchComponent implements OnInit {

  constructor(private medicineService: MedicineService) { }

  medicines: MedicineShort[] = [];

  ngOnInit() {




  }





}
