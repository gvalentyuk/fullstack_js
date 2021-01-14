import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [ProductItemComponent, InputComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
  exports: [ProductItemComponent, InputComponent]
})
export class SharedModule { }
