import { Injectable } from '@angular/core';
import { IProduct } from 'src/modals/iproduct';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class ManageProductService {


  products:Array<IProduct> = [];

  database = firebase.database();

  i = 0;

  constructor() { }

  //  Create Product
  addProductOnFirebase(product: IProduct): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
       this.database
        .ref(`products/${this.products.length}`)
        .set({
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
        })
        .then(() => {})
        .catch(() => {
          reject("Erreur");
        });
    });
  }


  // 
  addProduct(product: IProduct): Array<IProduct> {
    this.products.push(product);
    return this.products;
  }


  // get all product
  getProductsOnFirebase(): Promise<Array<IProduct>> {
    return new Promise((resolve, reject) => {
      this.database.ref("products").on(
        "child_added",
        (snapshot) => {
          let obj = snapshot.val();
          obj.id = snapshot.key;
          this.products.push(obj);
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // Update Product from database 
  updateProductOnFirebase(product: IProduct, id: number) {
    let update = {};
    update["/products/" + id] = product;

    this.database.ref().update(update);
  }

  // delete product from firebase
  deleteProduct(id: number) {
    this.database.ref(`/products/${id}`).remove();
  }

  // delete product from array
  deleteListener() {
    this.database.ref("products").on("child_removed", (child_removed) => {
      let i: number = 0;
      let continuer: boolean = true;
      do {
        if (Number(this.products[i].id) === Number(child_removed.key)) {
          console.log("dele");
          this.products.splice(i, 1);
          continuer = false;
        }
        ++i;
      } while (continuer && i < this.products.length);
    });
  }

  // update from array 
  updateListener() {
    this.database.ref("products").on("child_changed", (child_change) => {
      let i: number = 0;
      let continuer: boolean = true;
      do {
        if (Number(this.products[i].id) === Number(child_change.key)) {
          console.log("dele");
          this.products[i].name = child_change.val().name;
          this.products[i].price = child_change.val().price;
          this.products[i].quantity = child_change.val().quantity;
          this.products[i].description = child_change.val().description;
          continuer = false;
        }
        ++i;
      } while (continuer && i < this.products.length);
    });
  }


}
