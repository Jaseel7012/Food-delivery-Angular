import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {FormsModule} from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { LoginUserComponent } from './login-user/login-user.component';
import {HttpClientModule} from '@angular/common/http'

const myroute:Routes=[
  {
    path:'',
    component:RegistrationPageComponent
  },{
    path:'login',
    component:LoginUserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    ShowHidePasswordModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
