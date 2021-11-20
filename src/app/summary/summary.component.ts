import { Component, OnInit } from '@angular/core';
import { Add2cartService } from '../Service/add2cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private CartService:Add2cartService) { }

  public OrderDetails :any; // store OrderDetails from db
  public ord:any;



  ngOnInit(): void {

    this.CartService.getOrders().subscribe((data) => {
      this.OrderDetails = data
      console.log("order",this.OrderDetails);
  
    })

  }
  }


