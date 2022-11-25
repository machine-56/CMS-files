import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admind-edit',
  templateUrl: './admind-edit.component.html',
  styleUrls: ['./admind-edit.component.css']
})
export class AdmindEditComponent implements OnInit {

  draft={
    title:'',
    category:'',
    body:''
  }
  id:any;
  user:any;
  currentDateTime:Date =new Date();
  categories:any;

  constructor(private appservice:AppService, private router:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('i-a');
    this.id=localStorage.getItem('id');
    this.appservice.draftOne(this.id).subscribe((data)=>{
      this.draft = JSON.parse(JSON.stringify(data))
    })
    // get category list
    this.appservice.getcategory().subscribe((data)=>{
      this.categories = JSON.parse(JSON.stringify(data))
    })
  }

  onDraft(data:any){
    data.id=this.id;
    if(data.title!=''){
      this.appservice.editDraft(data).subscribe(()=>{})
      this.router.navigate(['/admin/userdraft'])
    }
    else{
      alert('Please enter title and category')
    }
    this.ngOnInit();
  }

  post(data:any){
    if(data.title!='' && data.body!='' && data.category!=''){
      data.date=this.currentDateTime;
      this.appservice.removeDraft(this.id).subscribe(()=>{})
      this.appservice.blogPost(data)
      this.router.navigate(['/admin/userdraft'])
    }
    this.ngOnInit();
  }

}
