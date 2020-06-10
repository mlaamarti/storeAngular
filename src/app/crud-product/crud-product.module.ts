import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudProductRoutingModule } from './crud-product-routing.module';
import { CrudProductComponent } from './crud-product.component';


@NgModule({
  declarations: [CrudProductComponent],
  imports: [
    CommonModule,
    CrudProductRoutingModule
  ]
})
export class CrudProductModule { }
