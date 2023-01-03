;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {MatIconModule} from '@angular/material/icon';
import {  MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common'
import { ProductAuthService } from './product-auth.service';
import { LogoutComponent } from './logout/logout.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component'
import { CartService } from './cart.service';

const myNavigation:Routes=[
 {
  path:'',component:HomeComponent
 },
 {
  path:'login',component:LoginComponent
 },
 {
  path:'signup',component:SignupComponent
 },
 {
  path:'products',component:ProductsComponent, canActivate:[ProductAuthService]
 },
 {
  path:'logout',component:LogoutComponent, canActivate:[ProductAuthService]
 },
 {
  path:'resetpassword',component:ResetpasswordComponent
 },
 { path:'cart',component:CartComponent},
 {
  path:'admin',component:AdminComponent
 },
 {
  path:'**',component:HomeComponent
 }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductsComponent,
    LogoutComponent,
    ResetpasswordComponent,
    AdminComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(myNavigation),
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [ProductAuthService,LoginComponent,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
