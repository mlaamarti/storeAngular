import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudProductComponent } from './crud-product.component';

const routes: Routes = [{ path: '', component: CrudProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudProductRoutingModule { }
