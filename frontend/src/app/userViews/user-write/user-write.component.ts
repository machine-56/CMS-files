import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-write',
  templateUrl: './user-write.component.html',
  styleUrls: ['./user-write.component.css']
})
export class UserWriteComponent implements OnInit {

  blog:FormBuilder | any;
  user:any;
  currentDateTime:Date =new Date();
  categories:any;

  constructor(private FormBuilder:FormBuilder, private appService:AppService, private router:Router) {}

  ngOnInit(): void {
    this.user=localStorage.getItem('i-r')
    this.blog = this.FormBuilder.group({
      title:this.FormBuilder.control('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\/]+'),
        Validators.minLength(5)
      ])),
      category:this.FormBuilder.control('',Validators.required),
      body:this.FormBuilder.control('',Validators.required)
    })
    // get category list
    this.appService.getcategory().subscribe((data)=>{
      this.categories = JSON.parse(JSON.stringify(data))
    })
  }

  onDraft(data:any){
    data.author=this.user;
    this.appService.blogDraft(data);
    this.router.navigate(['/user/home'])
    
  }

  onPost(data:any){
    data.author=this.user;
    data.date=this.currentDateTime;
    if(this.user!=null){
      this.appService.blogPost(data);
    }
    this.router.navigate(['/user/home'])
  }
}
