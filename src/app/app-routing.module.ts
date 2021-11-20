import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductComponent } from './product/product.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([ 

    {path:'products', component:ProductComponent},
    {path:'Cart', component:CartComponent},
    {path:'summary', component:SummaryComponent},
  {path:'invoice', component:InvoiceComponent}]
    )],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
