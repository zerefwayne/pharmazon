import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../services/medicine.service';
import {CartShort} from '../cart-short.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private medicineService: MedicineService) { }

  res: {cart: CartShort[], history: CartShort[]} = null;
  cartComponents: CartShort[] = [];
  previousOrders: CartShort[] = [];

  async ngOnInit() {

    this.res =  await this.medicineService.inCart();
    this.cartComponents = this.res.cart;
    this.previousOrders = this.res.history;

  }

}
