import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any;
  blogs:any;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('i-r')
    // recent blogs
    this.appService.recentBlog(this.user).subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
    })
  }

}
