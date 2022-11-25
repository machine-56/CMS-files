import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  blog={
    title:'',
    category:'',
    body:''
  }
  id:any;
  user:any;
  currentDateTime:Date =new Date();
  categories:any;

  constructor(private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('i-r');
    this.id=localStorage.getItem('id');
    this.appService.blogOne(this.id).subscribe((data)=>{
      this.blog = JSON.parse(JSON.stringify(data))
    })
    // get category list
    this.appService.getcategory().subscribe((data)=>{
      this.categories = JSON.parse(JSON.stringify(data))
    })
  }

  edit(data:any){
    // data.author=this.user;
    data.date=this.currentDateTime;
    console.log(data)
    if(this.user!=null){
      this.appService.editBlog(data).subscribe(()=>{})
    this.router.navigate(['/user/userpost'])
    }
  }

}
