import { Component, OnInit } from '@angular/core';
import { Add2cartService } from '../Service/add2cart.service';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any ; //to store products from the db
  public OrderInvoice : any ; // store OrderInvoice from db

  constructor( private api : ProductService, private CartService: Add2cartService,private router: Router) { }

  ngOnInit(): void {
    this.api .getProduct()
    .subscribe(products=>{
      this.productList = products; //product list data products is the response from the service
    })

    this.api .getOrderInvoice()
    .subscribe(Order=>{
      this.OrderInvoice = Order; //product list data products is the response from the service
    })

    console.log("Order Invoice is ", this.OrderInvoice);
    console.log("Product Details are", this.productList);

  }

  

  addtocart(i:any){
    this.CartService.addtoCart(i);
    this.router.navigateByUrl('/Cart');

  }

  

}
