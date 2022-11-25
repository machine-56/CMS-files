import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  user:any;
  blogs:any;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('i-a')
    // recent blogs
    this.appService.recentBlog(this.user).subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
    })
  }

}
