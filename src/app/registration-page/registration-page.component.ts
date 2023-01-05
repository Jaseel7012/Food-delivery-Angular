import { Component } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  name=""
  email=""
  password=""
  pn=""
  cnfrm=""
  address=""

 
  constructor(private val:Router){}
  read=()=>{
    if(this.name.length==0 || this.email.length==0 || this.password.length==0 || this.cnfrm.length==0 || this.pn.length==0 || this.address.length==0 ){
      alert("All Fields Are Required..")

    }
    if(this.name.length<5 && this.name.length>1){
      alert("name should be 5 or more characters")
      
    }
    if(this.password==this.cnfrm){
      this.val.navigate(['/'])
    }
    else{
      alert("password and confirm password did not matched")
    }
    

    
    
    

  }

}
