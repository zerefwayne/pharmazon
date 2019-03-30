import { Component, OnInit } from '@angular/core';
import { MedicineShort } from '../../medicine-short.model';
import axios from 'axios';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.sass']
})
export class TextSearchComponent implements OnInit {

  constructor() { }

  medicines: MedicineShort[] = [];

  ngOnInit() {
    this.getMedicines()
  }

  getMedicines() {
    axios.get('http://127.0.0.1:5000/medicine/oflox/', {
      headers:
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }
    }).then(res => {
      console.log(res.data);
      res.data.forEach((temp: MedicineShort) => {

        const newObject: MedicineShort = {
          name: temp.name,
          link: temp.name,
          price: temp.price
        }
        console.log(newObject);

      })

    })
      .catch(err => {
        console.log(err);
      });


  }



}
