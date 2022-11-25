import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  signup:FormBuilder |any;

  constructor(private FormBuilder:FormBuilder, private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.signup = this.FormBuilder.group({
      fname: this.FormBuilder.control('',Validators.required),
      email: this.FormBuilder.control('',Validators.compose([
        Validators.required,
        Validators.email
      ])),
      pwd: this.FormBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[\\w\\-!@#$%^&*()_{}:;<>,.?/=+\\s\\/]+')
      ])),
      uname: this.FormBuilder.control('',Validators.required),
      phno: this.FormBuilder.control('',Validators.required)

    })
  }

  onSubmit(data:any){
    data.role='user';
    console.log(data);
    this.appService.signup(data).subscribe(()=>{
      this.router.navigate(['']);
    })
  }

}
