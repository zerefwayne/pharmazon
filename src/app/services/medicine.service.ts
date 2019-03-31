import { Injectable } from '@angular/core';
import axios from 'axios';
import {MedicineShort} from '../medicine-short.model';
import { CartShort } from '../cart-short.model';

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

 inCart(): {cart: CartShort[], history: CartShort[]} {

  const cartMedicines: CartShort[] = [];
  const history: CartShort[] = [];

  axios.get('/api/user/cart',{
    headers:
      { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }
  }).then(res => {

    res.data.cart.forEach((dat: CartShort) =>{
        const newProduct: CartShort = {
          name: dat.name,
          link: dat.name,
          price: dat.price
        };
        cartMedicines.push(newProduct);
    });

    res.data.history.forEach((dat: CartShort) =>{
      const newProduct: CartShort = {
        name: dat.name,
        link: dat.name,
        price: dat.price
      };
      history.push(newProduct);
    });



  }).catch(err => {
      console.log(err);
  });

    return {cart: cartMedicines, history: history};
  }
  

  OnClickLink(link){
    const LinkUrl = link;
    axios.post(`/api/medicine/data`, { data: LinkUrl }, {
      headers:
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST' }
    }).then(res => {
      console.log(res);

    }).catch(err => {
      console.log(err);
    });
  }
  
  OnCheckout(){
    axios.delete('/api/user/cart',{
      headers:
      { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'DELETE' }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
  }

}
