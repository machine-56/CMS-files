import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  user:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('i-r');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
