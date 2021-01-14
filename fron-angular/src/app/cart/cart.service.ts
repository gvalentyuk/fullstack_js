import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  rootUrl = 'http://localhost:5000/api'

  constructor(private http: HttpClient) {
  }

  fetchCart() {
    return this.http.get<any>(`${this.rootUrl}/user/cart`)
  }

  deleteItem(item) {
    return this.http.put<any>(`${this.rootUrl}/user/cart/remove`,{item})
  }

  addToCart(item) {
    return this.http.put(`${this.rootUrl}/user/cart/add`, {item})
  }
}
