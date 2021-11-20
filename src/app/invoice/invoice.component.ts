import { Component, OnInit } from '@angular/core';
import { Add2cartService } from '../Service/add2cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private CartService:Add2cartService) { }

  public OrderInvoice : any; // store OrderInvoice from db
  
  public inv:any;


  ngOnInit(): void {

    this.CartService.getOrderInvoice().subscribe((data) => {
      this.OrderInvoice = data
      this.inv = Number(this.OrderInvoice[0].invoice)+1;
      console.log("Order Invoice is ",+this.inv);
     
      
     
     
  
    })

  }

}
