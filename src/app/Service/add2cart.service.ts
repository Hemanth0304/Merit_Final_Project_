import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {map}  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class Add2cartService {

  public cartitemList : any =[]
  public productList = new  BehaviorSubject <any>([]);
  constructor(private http : HttpClient) { }

  


  getProducts(){
   return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartitemList.push(...product);
    this. productList.next(product);


  }

  addtoCart(product:any){
    this.cartitemList.push(product);
    this.productList.next(this.cartitemList);
    console.log(this.cartitemList)
    
  }

  getPrice(): number{
    let pr = 0
    this.cartitemList.map((a: any) => {
   
      pr = a.price;
    });
    
    return pr;
  }

  gettitle():any{
    let tle = 0
    this.cartitemList.map((b:any)=>{
      tle = b.productName;
    });
    
    return tle;

  }

  getcpu():any{
    let Cpu = 0
    this.cartitemList.map((b:any)=>{
      Cpu = b.cpu;
    });
    
    return Cpu;

  }


  getram():any{
    let Ram = 0
    this.cartitemList.map((b:any)=>{
      Ram = b.ram;
    });
    
    return Ram;

  }
  getstorage():any{
    let Storage = 0
    this.cartitemList.map((b:any)=>{
      Storage = b.storage;
    });
    
    return Storage;

  }

  addpro(productdetail:any) {
    return this.http.post('http://localhost:7050/payment', productdetail);
  }


  // To get the Last Order Invoice
  getOrderInvoice(){
    return this.http.get<any>('http://localhost:7050/findone')
    .pipe(map((resp:any)=>{
      return resp;
    }))
  }


  getSpecs(){
    return this.http.get<any>('http://localhost:9090/specDisplay');
  }


  getOrders(){
    return this.http.get<any>('http://localhost:7050/getsummary');
  }



 
  
}
