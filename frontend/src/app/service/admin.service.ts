import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { serverURL } from '../../app/server';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router:Router) {}

  getUser(){
    return this.http.get(`${serverURL}/admin/findUser`)
  }
  configusrad(data:any){
    return this.http.put(`${serverURL}/admin/configusr/ad`,data)
  }
  configusrur(data:any){
    return this.http.put(`${serverURL}/admin/configusr/user`,data)
  }
  findBlog(){
    return this.http.get(`${serverURL}/admin/home/blog`);
  }
  getCategory(){
    return this.http.get(`${serverURL}/admin/getcategory`);
  }
  addCategory(data:any){
    return this.http.put(`${serverURL}/admin/add/category`,data);
  }
  fnEditcate(data:any){
    return this.http.put(`${serverURL}/admin/edit/category`,data);
  }
  fnDeleteCate(data:any){
    return this.http.delete(`${serverURL}/admin/delete/category/${data}`)
  }
  getfilter(){
    return this.http.get(`${serverURL}/user/filter`);
  }
  blog_filter(data:any){
    return this.http.post(`${serverURL}/admin/blog/find`,data);
  }  
  blogDraft(data_draft:any){
    return this.http.post<any>(`${serverURL}/user/draft`,data_draft).subscribe(()=>{
      alert('content saved as draft')
    })
  }
  blogPost(data_post:any){
    return this.http.post<any>(`${serverURL}/user/post`,data_post).subscribe(()=>{
      alert('content is posted')
    })
  }

}
