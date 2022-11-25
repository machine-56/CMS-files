import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {


  adminlogin:FormBuilder | any;

  constructor(private FormBuilder:FormBuilder, private appService:AppService, private router:Router) {}


  ngOnInit(): void {
    this.adminlogin = this.FormBuilder.group({
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
    this.appService.adminLogin(data).subscribe((data)=>{
      localStorage.setItem('i-a',data.a);
      localStorage.setItem('token',data.token);
      this.router.navigate(['/admin/home']);
    })
  }

}
