import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'crudProduct', loadChildren: () => import('./crud-product/crud-product.module').then(m => m.CrudProductModule) },
  { path: 'registrer', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: '404', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'product-info', loadChildren: () => import('./product-info/product-info.module').then(m => m.ProductInfoModule) },
  {
    path: "**",
    redirectTo:"404"
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
