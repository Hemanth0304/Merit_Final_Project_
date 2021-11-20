import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

//  To get the products from mongodb to display in mongo db
  getProduct(){
    return this.http.get<any>("http://localhost:9090/getproducts")
    .pipe(map((products:any)=>{
      return products;
    }))
  }

  

  getSpec(){
    return this.http.get<any>("http://localhost:9090/getproducts")
    .pipe(map((specs:any)=>{
      return specs;
    }))
  }


   // To get the Last Order Invoice
  //  getOrderInvoice(){
  //   return this.http.get<any>('http://localhost:7050/findone')
  //   .pipe(map((resp:any)=>{
  //     return resp;
  //   }))
  // }


  getOrderInvoice(){
    return this.http.get<any>('http://localhost:7050/findone');
  }

 
}
