import { Component,DoCheck } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faE, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent {
userEntryProDetails:{}={ };
faDelete=faTrashCan;
faEdit=faEdit;
faCart=faShoppingCart
editPro_id:any
editPro_name:any
editPro_desc:any
editPro_price:any


product_form=new FormGroup({
  pro_Id:new FormControl(),
  pro_Name:new FormControl(),
  pro_Desc:new FormControl(),
  pro_Price:new FormControl(),

});
get pro_Id(){
   return this.product_form.get('pro_Id')
}
get pro_Name(){
  return this.product_form.get('pro_Name')
}
get pro_Desc(){
  return this.product_form.get('pro_Desc')
}
get pro_Price(){
  return this.product_form.get('pro_Price')
}



sellingProductsArr = [ 
  {  pro_id:101, pro_name:'Watch', pro_desc:"Rolex model model made in local garrge", pro_price:1299  }
]


constructor( private Pro_Model:NgbModal){   }

// below is used to open bootstrap model to add product
  addProductDetails(modalData:any){
    this.Pro_Model.open(modalData)
  }

  // Adding data in bootstrap model and storing
  addProDetails(){
    let userPro={
       pro_id: this.pro_Id?.value,
       pro_name:this.pro_Name?.value,
       pro_desc:this.pro_Desc?.value,
       pro_price:this.pro_Price?.value
     }
     console.log(userPro);
     this.sellingProductsArr.push(userPro)
     console.log(this.sellingProductsArr);
     localStorage.setItem("selling_Products",JSON.stringify(this.sellingProductsArr))
     this.product_form.reset()
     this.Pro_Model.dismissAll()
     
  }
// Closing Bootstrap model
  closeModel(){
    this.Pro_Model.dismissAll()
  }
// Removing the Product from ther list
  productRemove(Pro_index:number){
    this.sellingProductsArr.splice(Pro_index,1);
    localStorage.setItem("selling_Products", JSON.stringify(this.sellingProductsArr))
  }

  indexForUpdateDetails:number;
  lsToUpdate:any;
  lsJsonData:any;
edit_Pro_Details(editDetails:any,editIndex:number){
   this.indexForUpdateDetails=editIndex;
    // this.sellingProductsArr[editIndex]
    console.log(this.sellingProductsArr[editIndex]);

    this.editPro_id=this.sellingProductsArr[editIndex].pro_id,
      this.editPro_name=this.sellingProductsArr[editIndex].pro_name,
      this.editPro_desc=this.sellingProductsArr[editIndex].pro_desc,
      this.editPro_price=this.sellingProductsArr[editIndex].pro_price
     this.Pro_Model.open(editDetails)
  }


  updateEditedDetails(){
    console.log(this.indexForUpdateDetails);
    let updateObj={
      pro_id: this.editPro_id  ,
      pro_name:  this.editPro_name  ,
      pro_desc:  this.editPro_desc,
      pro_price: this.editPro_price  
    }
    this.sellingProductsArr[this.indexForUpdateDetails]=updateObj;
    this.lsToUpdate= localStorage.getItem('selling_Products');
    this.lsJsonData = JSON.parse(this.lsToUpdate)
    this.lsJsonData[this.indexForUpdateDetails]=updateObj;
    localStorage.setItem("selling_Products",JSON.stringify(this.lsJsonData))
    // console.log( lsToUpdate[this.indexForUpdateDetails] );
    this.Pro_Model.dismissAll()
  }

  addField(){
    let row = document.createElement('div');  
      row.className = 'row';
      row.innerHTML = `
      
      <input type="text" class="form-control w-75 mb-3" placeholder="Enter details" >  `;
   document.querySelector('.newFeild')?.appendChild(row)

  }

}