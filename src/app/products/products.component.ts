import { Component, OnInit, DoCheck } from '@angular/core';
import { MyproductapiService } from '../myproductapi.service'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, DoCheck {

  searchProducts: any;
  myProducts: any = []
  prod_index: any;
  closeModal: any;
  faCartIcon = faCartArrowDown;
  myLoader: boolean = true;
  // below variable is used to store objects
  cartArr: any;
  cartServiceArr: any;
  cartIds: number[] = []

  constructor(private myapi: MyproductapiService, private modalService: NgbModal, private myCartService: CartService) {  }
  ngOnInit(): void {
    this.myapi.x().subscribe((res: any) => {
      console.log(res);
      this.myProducts = res;
      this.myLoader = false
    });
  }
  ngDoCheck(): void {
    this.cartServiceArr = this.myCartService.myCart;
    this.cartIds = this.cartServiceArr.map((each: any) => `${each.id}`)
  }

  apidata() {
    console.log(this.myProducts);
  }

  addToCart(index: any) {
    this.cartArr = this.myProducts[index]
    console.log(this.cartArr);
    //  below we used cart service and we are calling a method from it to store our obj.
    this.myCartService.addItemToCart(this.cartArr)
    Swal.fire({
      icon: 'success',
      title: "Item added to the cart"
    })
  }

  showProductDetails(content: any, indexValue: any) {
    this.modalService.open(content)
    console.log(indexValue);
    this.prod_index = indexValue
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
