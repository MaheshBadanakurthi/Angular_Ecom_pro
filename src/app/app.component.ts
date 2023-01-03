import { Component,OnInit,DoCheck} from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit,DoCheck{
  
  productShow:boolean=true;
  logoutShow:boolean=true;
  forLoggin:any;
  forlog:any;

  constructor(  ){  }

  ngOnInit():void{
    this.forLoggin =  sessionStorage.getItem('loggedin')
      this.forlog=JSON.parse(this.forLoggin)
      
      if(this.forlog){
        this.productShow=false
      }
      // this.productShow = this.log.toShowProducts
  }
 
ngDoCheck(): void {
  this.forLoggin =  sessionStorage.getItem('loggedin')
      this.forlog=JSON.parse(this.forLoggin)
      // console.log('working Do check');
      
      if(this.forlog){
        this.productShow=false;
        this.logoutShow=false
      }
      else{
        this.productShow=true;
        this.logoutShow=true;
      }
     
}


}
