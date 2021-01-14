import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home/home.component';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'shop',  loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  {path: 'cart', canLoad: [AuthGuard], loadChildren:() => import('./cart/cart.module').then(m => m.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
