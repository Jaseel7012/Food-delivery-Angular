import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""
  constructor(private r:Router){}
  read=()=>{
    console.log("cc")
    if(this.username=="admin" && this.password=="123"){
      this.r.navigate(['/'])
    }
    else{
      alert("invalid credential")
    }

  }

}
