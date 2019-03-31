import { Injectable } from '@angular/core';
import axios from 'axios';
import {MedicineShort} from '../medicine-short.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }

  getMedicines(query: string): MedicineShort[] {

    const requiredMedicines: MedicineShort[] = [];

    axios.get(`/api/medicine/${query}/`, {
      headers:
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }
    }).then(res => {


      res.data.medList.slice(0, 16).forEach((temp: MedicineShort) => {

        const newObject: MedicineShort = {
          name: temp.name,
          link: temp.name,
          price: temp.price
        };


        requiredMedicines.push(newObject);

      })

    }).catch(err => {
        console.log(err);
    });

    return requiredMedicines;

  }



}
