import { Component,OnInit } from '@angular/core';
import { MyproductapiService } from '../myproductapi.service'
import { MatDialog } from '@angular/material/dialog';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  myProducts:any;
  prod_index:any;
  closeModal: any;

  constructor(private myapi:MyproductapiService,private modalService: NgbModal){
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

  showProductDetails(value:number){
    console.log("Index value is",value);
    this.prod_index=value
    console.log('Index values after assigned',this.prod_index);
    
    console.log('You clicked on the img');
  //  this.dialog.open(ProductdetailsComponent,{height:'79%',width:'70%'})
    
  }

  
 
    
  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
