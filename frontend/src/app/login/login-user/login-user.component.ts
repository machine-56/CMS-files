import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userlogin:FormBuilder | any;

  constructor(private FormBuilder:FormBuilder, private appService:AppService, private router:Router) {}


  ngOnInit(): void {
    this.userlogin = this.FormBuilder.group({
      email: this.FormBuilder.control('', Validators.compose([  
        Validators.required,
        Validators.email
      ])),
      pwd: this.FormBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[\\w\\-!@#$%^&*()_{}:;<>,.?/=+\\s\\/]+')
      ])),
    })
  }

  onSubmit(data:any){
    console.log(data);
    this.appService.userLogin(data).subscribe((data)=>{
      localStorage.setItem('i-r',data.u);
      localStorage.setItem('token',data.token);
      this.router.navigate(['/user/home']);
    })
  }

}
