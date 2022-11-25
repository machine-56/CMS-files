import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { serverURL } from './server';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router:Router) {}

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  adminLogin(chkadmin: any){
    return this.http.post<any>(`${serverURL}/login/admin`,chkadmin)
  }

  userLogin(chkuser: any){
    return this.http.post<any>(`${serverURL}/login/user`,chkuser)
  }
  
  signup(newUser: any){
    return this.http.post<any>(`${serverURL}/signup`,newUser)
  }

  findBlog(){
    return this.http.get(`${serverURL}/common/home/blog`);
  }

  getcategory(){
    return this.http.get(`${serverURL}/common/filter`);
  }

  blogFilter(data:any){
    return this.http.post(`${serverURL}/common/blog/find`,data);
  }

  recentBlog(data:any){
    return this.http.get(`${serverURL}/common/profile/blog/${data}`);
  }

  userBlog(data:any){
    return this.http.get(`${serverURL}/common/filter/blog/${data}`);
  }

  userDraft(data:any){
    return this.http.get(`${serverURL}/common/filter/draft/${data}`);
  }

  blogOne(data:any){
    return this.http.get(`${serverURL}/common/blog/getone/${data}`);
  }

  draftOne(data:any){
    return this.http.get(`${serverURL}/common/draft/getone/${data}`);
  }

  blogPost(data_post:any){
    return this.http.post<any>(`${serverURL}/common/post`,data_post).subscribe(()=>{
      alert('content is posted')
    })
  }

  blogDraft(data_draft:any){
    return this.http.post<any>(`${serverURL}/common/draft`,data_draft).subscribe(()=>{
      alert('content saved as draft')
    })
  }

  editBlog(data:any){
    return this.http.put(`${serverURL}/common/blog/edit`,data);
  }

  editDraft(data:any){
    return this.http.put(`${serverURL}/common/draft/edit`,data);
  }

  removeBlog(data:any){
    return this.http.delete(`${serverURL}/common/blog/remove/${data}`);
  }

  removeDraft(data:any){
    return this.http.delete(`${serverURL}/common/draft/remove/${data}`);
  }

}
