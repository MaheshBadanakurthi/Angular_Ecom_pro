import { Component,OnInit } from '@angular/core';
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
  faCartIcon=faCartArrowDown

  constructor( private cartS:CartService, private route:Router){ 
    this.lsdata=localStorage.getItem("selling_Products")
    this.lsSellingProducts=JSON.parse(this.lsdata)
    console.log(this.lsSellingProducts);
    
    this.prod_Details=this.cartS.show_pro_detailsArr;
    console.log(this.prod_Details);
    // below is for filter the data based the category.
   let catg=this.prod_Details.category;
   console.log(catg);
// below is for to show only seller info in aside prop.
    this.sellers = this.prod_Details.Sellers
    this.categoryProductArr = this.lsSellingProducts.map((each:any)=>`${each.category === catg}`)
    console.log(this.categoryProductArr);
  

  }
ngOnInit(): void {
  
}

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







  
}
