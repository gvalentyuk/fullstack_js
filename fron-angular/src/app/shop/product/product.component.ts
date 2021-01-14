import {Component, OnInit} from '@angular/core';
import {ShopService} from '../shop.service';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product";
import {User} from "../../models/auth";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  user: User
  product: Product
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.authService.currentUser.subscribe(user => this.user = user)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shopService.fetchProduct(params.id).subscribe(res => {
        this.product = res.product;
        this.loading = false;
      })
    })
  }

  addToCart(item){
    this.cartService.addToCart(item).subscribe(res => console.log(res))
  }
}
