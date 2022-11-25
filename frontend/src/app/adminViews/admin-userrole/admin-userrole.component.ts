import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-userrole',
  templateUrl: './admin-userrole.component.html',
  styleUrls: ['./admin-userrole.component.css']
})
export class AdminUserroleComponent implements OnInit {

  users:any;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getUser().subscribe((data)=>{
      this.users = data;
    })
  }

  configusrad(data:any){
    if(confirm(`Change ${data.fname} to ADMIN`) == true){
     this.adminService.configusrad(data).subscribe(()=>{
       this.ngOnInit();
     })
    }
  }
  configusrur(data:any){
    if(confirm(`Change ${data.fname} to user`) == true){
      this.adminService.configusrur(data).subscribe(()=>{
        this.ngOnInit();
      })
    }
  }
}
