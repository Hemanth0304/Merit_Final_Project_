import { Component, OnInit } from '@angular/core';
import { Add2cartService } from '../Service/add2cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {map} from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Specsss: string;


  public pr: any;
  public grandtotal: any;
  public product :any =[];
  billDetails :any; //product details which are to be sent to db is stored in this
  submitted = false;
  public tr :any; 
  public tle: any;
  public cpu: any;
  public Ram: any;
  public Storage: any;

  public grnd:any;
  public qc = 1;

  public inv:any;


  public OrderInvoice : any; // store OrderInvoice from db

  public Specs :any; //store Specs from db

  // To generate Invoice
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe :any;

  rn: any;
  bill:any;
  onelpr:any;

  osprice:any;
  osname:any;
  ssdprice:any;
  graphicsprice:any;
  ssdname:any;
  graphicsname:any;
  clicked = false; 
  click =false;
  clic =false;
  show = false;

 

   
  
  

 
  constructor(private formBuilder: FormBuilder,private CartService:Add2cartService,private router: Router) { }



  quant=1;
  onKeyUp() {
    console.log("quantity is ",this.quant);
  }



  output = '....';
  Specs2:any;

  RAM = [
    { value: '5000', viewValue: '8GB RAM' },
    { value: '10000', viewValue: '12GB RAM' },
    { value: '20000', viewValue: '16 GB RAM ' },
    { value: '30000', viewValue: '32 GB RAM' },
  ];


  ngOnInit(): void {
   
    

    
    this.qc =  this.quant;
    this.CartService.getProducts().subscribe(res=>{
      this.product = res;
      this.pr = this.CartService.getPrice();//getprice 
      this.gt= this.pr;
      this.onelpr =this.pr;
      this.tle =this.CartService.gettitle();//gettitle
      this.cpu =this.CartService.getcpu();//getcpu
      this.Ram =this.CartService.getram();//getRam


  //     this.CartService .getOrderInvoice()
  //     .subscribe(Order=>{
  //       this.OrderInvoice = Order; //product list data products is the response from the service
  //     })


  //     this.CartService.getOrderInvoice()
  // {
  //   this.CartService..subscribe((data:any)=>{
  //   this.OrderInvoice=data;
  // })}

  this.todayWithPipe = String(this.pipe.transform(Date.now(),'T4' + '-yyyy-' ));

  this.todayWithPipe = String(this.todayWithPipe);
// To get Invoice Number from last place order
  this.CartService.getOrderInvoice().subscribe((data) => {
    this.OrderInvoice = data
    this.inv = Number(this.OrderInvoice[0].invoice)+1;
    console.log("Order Invoice is ", this.todayWithPipe+this.inv);
    this.bill = String(this.todayWithPipe + this.inv);
    console.log("inv",this.inv);
    console.log("Bill details",this.bill);

  })




  this.CartService.getSpecs().subscribe((data) => {
    this.Specs = data
    this.osprice = Number(this.Specs[0].OS_Price);//osPrice
    this.osname = String(this.Specs[0].OS_Name);//OSName
    
    this.ssdprice = Number(this.Specs[0].SSD_price);//SSD price
    this.ssdname =String(this.Specs[0].SSD_name);//SSD Name

    this.graphicsprice = Number(this.Specs[0].Graphics_price);//Graphics price
    this.graphicsname =String(this.Specs[0].Graphics_name);

    
    console.log("OS price is ", this.osprice);
    console.log("osname",this.osname);

    console.log("SSD Price", this.ssdprice);
    console.log("SSD Name", this.ssdname);

    console.log("Graphics Name", this.graphicsname);
    console.log("Graphics price", this.graphicsprice);

    console.log("op", this.op);


  })



  console.log("Invoice Number is", this.inv);




  



  
     




      

 

      
      console.log("Price is ", this.pr);
      console.log("Title:",this.tle);
      console.log("CPU:",this.cpu);
      console.log("RAM:",this.Ram);
      console.log("GrandTotal is",this.pr * this.quant);
      console.log("quantity is ", this.quant);
      console.log("Last Order is",this.OrderInvoice);
      console.log("One Laptop Price is", this.onelpr);
    

      this.tr = Number(this.pr)+Number(this.pr);
      

      


      this.billDetails = this.formBuilder.group({
        ProductName:[this.tle],
        productTotal:[this.pr],
        CPU:[this.cpu],
        RAM:[this.Ram],
        TotalQuantity:[this.grnd],
        GrandTotal:[this.gt],
        invoice:[],
        Bill:[this.bill],
        OSPrice:[this.op],
        OSName:[],
        GraphicsName:[],
        GraphicsPrice:[this.gp],
        oosprice:[],
        oGraphicsPrice:[],
        Olaptopprice:[],
        

        
        
       
        
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        phone: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
        
        
        
        email: ['', [Validators.required, Validators.email],
        
      ]
        
        
        



      });



      // this.OrderInvoice.map((b:any)=>{
      //   this.inv = b.invoice;
      // });
      
      // return this.inv;
      // console.log("Invoice Number is", this.inv);
    })

 
   

  } //oninit End



 

    //For Quantity

quantitycount = 1;


gt = 0;


plus() {

     this.qc= Number(this.quantitycount++);
     this.onelpr = Number(this.pr)*Number(this.qc); //to get price according to quantity for laptop
     
    
  this.gt = Number(this.qc)  * Number(this.pr);

  return this.gt;
  return this.qc; 
  return this.onelpr;
   }


   minus() {

    this.qc= Number(this.quantitycount --);
   
    this.gt = Number(this.qc) * Number(this.pr);
 
   return this.gt;
   return this.qc;
 
   
  }

  op :any;
  on:any;
  oneop:any;

  os(){
   
    this.oneop = Number(this.osprice);

    this.op = Number(this.osprice)*Number(this.qc)
    this.on = String(this.osname);
    this.gt = Number(this.op)+Number(this.gt)
    return this.gt;
    return this.op;
    return this.on;
    return this.oneop;


  }



gp:any;
gn:any;
onegp:any;
  gr()
  
  {
    this.onegp = Number(this.graphicsprice);

    this.gp = Number(this.graphicsprice)*Number(this.qc)
    this.gn = String(this.graphicsname);
    this.gt = Number(this.gp) + Number(this.gt);
    return this.gt;
    return Number(this.gp);
    return this.gn;
    return this.onegp;
  }






  

 //TO GET RAM PRICE
 ramprice = this.output;


  onRamSelection() {
    this.output = this.Specs2;
    console.log(this.output);
    console.log(this.ramprice);
  }
  
  adram(){

    this.gt = Number(this.output) + Number(this.gt)

  }

   

  reload(){
    // any other execution
    this.ngOnInit()
    }

    onReset() {
      this.submitted = false;
      this.billDetails.reset();
    }

    get f() {
      return this.billDetails.controls;
    }
  
    

    onSubmit()
    {
      this.submitted = true;
         if (this.billDetails.invalid){
          alert("Product not Purchased")
           return;
          }
          this.CartService.addpro(this.billDetails.value).subscribe((data)=>{});
          alert("Product Purchased")
             
          this.router.navigateByUrl('/invoice');

// this.pr= Number(this.pr) + Number( this.pr);


// this.inv = Number(this.inv)+Number(1);


    console.log("Bill",this.rn);


    
 

}




}
