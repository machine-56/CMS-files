import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  logs:any=[];
  edit_data:any={
    id:'',
    ncat:''
  }
  newlog:FormBuilder|any;
  newcategory:FormBuilder|any;
  old: any;

  constructor(private adminService:AdminService, private appService:AppService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.appService.getcategory().subscribe((data)=>{
      this.logs=JSON.parse(JSON.stringify(data));
    })
    this.newlog = this.formbuilder.group({
      category:this.formbuilder.control('', Validators.required)
    })
    this.newcategory = this.formbuilder.group({
      newcat:this.formbuilder.control('', Validators.required),
      id:this.formbuilder.control('')
    })
  }
  
  addcategory(data:any){
    this.adminService.addCategory(data).subscribe(()=>{
      alert(`${data.category} added`)
      this.ngOnInit();
    })
  }
  
  catchid(data:any){
    this.old=data.category;
    this.edit_data.id=data._id;
  }

  catchnew(data:any){
    this.edit_data.ncat=data.newcat;
    this.fnEdit(this.edit_data);
  }

  fnEdit(data:any){
    if(confirm(`Change ${this.old} to ${this.edit_data.ncat}`)){
      this.adminService.fnEditcate(data).subscribe(()=>{
        this.ngOnInit();
      })
    }
  }

  fnDelete(data:any){
    if(confirm(`Remove ' ${data.category} '`) == true){
      this.adminService.fnDeleteCate(data._id).subscribe(()=>{
        // alert(`' ${data.category} ' removed`);
        this.ngOnInit();
      })
    }
  }

}
