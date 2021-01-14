import {Component, OnInit} from '@angular/core';
import {ShopService} from "./shop.service";
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false
  products: Product[] = []

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.shopService.getProducts().subscribe(res => {
      this.products = res.products.filter((el,i) => i < 6);
      this.loading = false;
    })
  }
}
