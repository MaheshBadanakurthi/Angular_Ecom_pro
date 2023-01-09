import { JsonPipe } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellingproduct',
  templateUrl: './sellingproduct.component.html',
  styleUrls: ['./sellingproduct.component.css'],
  providers:[NgbCarouselModule]
})
export class SellingproductComponent implements OnInit{

  lsForSellProduct:any;
  lsData:any
  sellingProductToCart:any={};
  carouselImg=[]
  faCartIcon=faCartArrowDown

  // carousel test
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor( private myCartS:CartService, private bsModal:NgbModal){   }
  
  ngOnInit(): void {
    this.lsData=localStorage.getItem('selling_Products')
    this.lsForSellProduct=JSON.parse(this.lsData) 
    console.log(this.lsForSellProduct);
    this.carouselImg=this.lsForSellProduct.map((item:any)=> `${item.image}` )
    
  }

  addItemtoCart(index:number){
    this.sellingProductToCart = this.lsForSellProduct[index];
    this.myCartS.addItemToCart(this.sellingProductToCart)
    Swal.fire({
      icon:'success',
      title:"Item added to the cart"
    })
    console.log(this.lsForSellProduct[index]);
    
  }

  // Below is used show popup n Carousel
  showCarouselPopup(myCarousel:any){
    this.bsModal.open(myCarousel)
  }




}
