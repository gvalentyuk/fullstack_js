import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  rootUrl = 'http://localhost:5000/api/'

  constructor(private http: HttpClient) {
  }

  fetchProduct(id: string) {
    return this.http.get<any>(`${this.rootUrl}products/${id}`)
  }
}
