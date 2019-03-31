import { Component, OnInit } from '@angular/core';
import { MedicineShort } from '../../medicine-short.model';
import axios from 'axios';
import {MedicineService} from '../../services/medicine.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.sass']
})
export class TextSearchComponent implements OnInit {

  searchValue: string = '';

  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router) {

    this.searchValue = this.route.snapshot.queryParamMap.get('query');

  }

  medicines: MedicineShort[] = [];

  ngOnInit() {
    this.getMedicines()
  }

  getMedicines(){

    this.medicines = [];
    this.medicines = this.medicineService.getMedicines(this.searchValue);

  }



}
