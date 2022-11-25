import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  admin:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('i-a');
  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }

}
