import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  blogs:any=[];
  filter:FormBuilder | any;
  filter_lists: any=[];

  constructor(private appService:AppService, private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    // all blogs
    this.appService.findBlog().subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
    })
    this.filter = this.FormBuilder.group({
      val: this.FormBuilder.control('')
    })
    this.appService.getcategory().subscribe((data)=>{
      this.filter_lists = JSON.parse(JSON.stringify(data));
    })
  }

  filterBlog(data:any){
    if(data.val=='all'){
      this.ngOnInit();
    }
    else{
    // filtered blogs
    this.appService.blogFilter(data).subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
    })}
  }

}
