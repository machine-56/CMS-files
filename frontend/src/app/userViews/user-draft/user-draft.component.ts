import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-draft',
  templateUrl: './user-draft.component.html',
  styleUrls: ['./user-draft.component.css']
})
export class UserDraftComponent implements OnInit {

  drafts:any=[];
  user: any;

  constructor(private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('i-r')
    // get draft
    this.appService.userDraft(this.user).subscribe((data)=>{
      this.drafts=JSON.parse(JSON.stringify(data));
    })
  }

  edit(data:any){
    if(data!=null){
      localStorage.setItem('id',data._id)
      this.router.navigate(['/user/draft/edit'])
    }
  }

  remove(data:any){
    if(confirm(`Delete ${data.title}`)==true){
      this.appService.removeDraft(data._id).subscribe(()=>{
        this.ngOnInit();
      })
    }
  }

}
