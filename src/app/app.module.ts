import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {FormsModule} from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

const myroute:Routes=[
  {
    path:'',
    component:RegistrationPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    ShowHidePasswordModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
