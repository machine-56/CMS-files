import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  blogs:any=[];
  user: any;

  constructor(private FormBuilder:FormBuilder, private appService:AppService, private router:Router) { }


  ngOnInit(): void {
    this.user=localStorage.getItem('i-a')
    // all blogs
    this.appService.userBlog(this.user).subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
    })
  }

  edit(data:any){
    if(data!=null){
      localStorage.setItem('id',data._id)
      this.router.navigate(['/admin/edit'])
    }
  }

  remove(data:any){
    if(confirm(`Delete ${data.title}`)==true){
      this.appService.removeBlog(data._id).subscribe(()=>{
        this.ngOnInit();
      })
    }
  }

}
