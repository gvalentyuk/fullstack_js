import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cart: Product[]

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.fetchCart().subscribe(res => this.cart = res.cart)
  }

  delete(item) {
    this.cartService.deleteItem(item).subscribe(res => this.cart = res.cart)
  }

}
