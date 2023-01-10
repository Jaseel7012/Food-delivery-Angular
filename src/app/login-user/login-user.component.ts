import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  password=""
  email=""
  constructor(private api:ApiService){}
  read=()=>{
    let data:any={
      "password":this.password,

      "email":this.email
    }
    
    console.log(this.email,this.password)
    this.api.login(data).subscribe(
      (resp:any)=>{
        console.log(resp)
        if(resp.status=="success"){
          alert("logged success")
          this.password=""
          this.email=""
        }
        else{
          console.log("failed")
        }
      }
    )


  }


}
