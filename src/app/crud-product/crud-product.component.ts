import { AuthentificationService } from 'src/services/authentification/authentification.service';
import { ManageProductService } from './../../services/manage-product/manage-product.service';
import { IProduct } from './../../modals/iproduct';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {

  product:IProduct;
  products:Array<IProduct>;

  buttonText = "Ajouter";

  id = 0;

  keys = [];

  constructor(
    private manageProductService:ManageProductService,
    private authentificationService:AuthentificationService,
    private router:Router
  ) { 
    this.product = {
      name:null,
      price:null,
      quantity:null,
      description:null,
      id:null
    }
  }

  ngOnInit(): void {
    this.products = [];
    this.keys = [];

    this.authentificationService.isAuthenticated().then(async (uid: string) => { 
      this.manageProductService.getProductsOnFirebase().then(() => {});

      this.products = this.manageProductService.products;
      this.manageProductService.deleteListener();
      this.manageProductService.updateListener();
    });
      
  }

  onEdit(product:IProduct){
    this.buttonText = "Update";
    this.product = product;
    this.id = product.id;
  }

  onDelete(id:number){
    this.manageProductService.deleteProduct(id);
  }

  onSubmit(product:IProduct){
    

    switch(this.buttonText){
      case "Ajouter" :
        this.manageProductService.addProductOnFirebase(product);
        break;
      case "Update" :
        this.manageProductService.updateProductOnFirebase(this.product,this.id);
        break;
    }

    this.resetForm();

  }


  resetForm(){

    this.buttonText = "Ajouter";

    this.product = {
      name:null,
      price:null,
      quantity:null,
      description:null
    }
  }



}
