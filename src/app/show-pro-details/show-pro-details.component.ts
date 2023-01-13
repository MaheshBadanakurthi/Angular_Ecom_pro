import { Component,OnInit,AfterContentChecked } from '@angular/core';
import { CartService } from '../cart.service';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-pro-details',
  templateUrl: './show-pro-details.component.html',
  styleUrls: ['./show-pro-details.component.css']
})
export class ShowProDetailsComponent implements OnInit {
  prod_Details:any=[]
  sellers:any=[]
  i:number=0;
  lsdata:any=[]
  lsSellingProducts:any=[]
  categoryProductArr:any=[]
  catgeroyName:string;
  similarProductObj:any
  similarProdcts:any=[]
  faCartIcon=faCartArrowDown

  constructor( private cartS:CartService, private route:Router){ 
    this.lsdata=localStorage.getItem("selling_Products")
    this.lsSellingProducts=JSON.parse(this.lsdata)
    console.log(this.lsSellingProducts);
  let x=this.lsSellingProducts.length
    this.prod_Details=this.cartS.show_pro_detailsArr;
    console.log(this.prod_Details);
    // below is for filter the data based the category.
    this.catgeroyName=this.prod_Details.category;
   console.log(this.catgeroyName);
// below is for to show only seller info in aside prop.
    this.sellers = this.prod_Details.Sellers
    // this.categoryProductArr = this.lsSellingProducts.map((each:any)=>`${each.category === catgeroyName}`)
    console.log(this.categoryProductArr);
    if(this.sellers){
    for(let i=0;i<x;i++){
      console.log('inside of for loop');
      if(this.catgeroyName.toLowerCase() === (this.lsSellingProducts[i].category).toLowerCase()){
        console.log(this.catgeroyName.toLowerCase() === (this.lsSellingProducts[i].category).toLowerCase());
        this.similarProductObj = this.lsSellingProducts[i]
       console.log(this.catgeroyName.toLowerCase());
       console.log((this.lsSellingProducts[i].category).toLowerCase());
       console.log(this.similarProductObj);
       this.similarProdcts.push(this.similarProductObj)
       console.log(this.similarProdcts);
    
      }
      else{   console.log( 'If condition is false');
              }
    }
  }
  
  }
ngOnInit(): void {    }

  // showing for sellers popup to direct to cart
  addItemtoCartSellers(index:number){
    console.log(index);
    console.log(this.sellers[index]);
    let x={
       price:this.sellers[index].sell_price,
      title:this.sellers[index].sell_brand,
     image: this.prod_Details.pro_url[0].urls
  }
  this.cartS.addItemToCart(x)
  Swal.fire({
    icon:'success',
    title:"Item added to the cart"
  })
    
  }

    

  // IN below functionality I used cart service to store data n display in Details component
  seeProductDetails(index:number){
    console.log(this.similarProdcts[index] );
    
    this.cartS.show_Pro_Details( this.similarProdcts[index]  )
    this.route.navigate(['/show_pro_Details'])
  }


  
}
