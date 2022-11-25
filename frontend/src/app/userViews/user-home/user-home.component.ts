import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  blogs:any=[];
  filter:FormBuilder | any;
  filter_lists: any=[];

  constructor(private FormBuilder:FormBuilder, private appService:AppService) { }

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

