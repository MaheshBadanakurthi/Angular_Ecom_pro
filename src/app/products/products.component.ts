import { Component,OnInit } from '@angular/core';
import { MyproductapiService } from '../myproductapi.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  myProducts:any;
  prod_index:any;
  closeModal: any;
  faCartIcon=faCartArrowDown

// below variable is used to store objects
  addedCartArr=[ { image:'https://tse3.mm.bing.net/th?id=OIP.YnR9VGkw6cNxlbnLdwDRjAHaE8&pid=Api&P=0',
    title:"THis is BootStrap  ",
    price:1212
}  ]
  cartArr:any
  constructor(private myapi:MyproductapiService,private modalService: NgbModal, private myCartService:CartService){
  }
  ngOnInit(): void {
    this.myapi.x().subscribe((res:any)=>{
      console.log(res);
      this.myProducts=res
    })
  }
  apidata(){
    console.log(this.myProducts);
    
  }
  addToCart(index:any){
    this.cartArr=this.myProducts[index]
    console.log(this.cartArr);
    // this.addedCartArr.push(this.cartArr)
    // console.log(this.addedCartArr);
  //  below we used cart service and we are calling a method from it to store our obj.
    this.myCartService.addItemToCart(this.cartArr)


  }


    
  showProductDetails(content:any,indexValue:any) {
    
    this.modalService.open(content)
    console.log(indexValue);
    this.prod_index=indexValue
    //    ,{ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
    //   this.closeModal = `Closed with: ${res}`;
    // }, (res) => {
    //   // this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    // });
   
  }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }



}
