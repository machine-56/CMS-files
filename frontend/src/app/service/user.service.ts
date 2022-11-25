import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router:Router) {}

  findBlog(){
    return this.http.get(`${serverURL}/user/home/blog`);
  }

  getfilter(){
    return this.http.get(`${serverURL}/user/filter`);
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

  blog_filter(data:any){
    return this.http.post(`${serverURL}/user/blog/find`,data);
  }

  findnBlog(data:any){
    return this.http.get(`${serverURL}/user/profile/blog/${data}`);
  }

  userBlog(data:any){
    return this.http.get(`${serverURL}/user/filter/blog/${data}`);
  }

  userDraft(data:any){
    return this.http.get(`${serverURL}/user/filter/draft/${data}`);
  }

  getOne(data:any){
    return this.http.get(`${serverURL}/user/getone/${data}`);
  }

  blogedit(data:any){
    return this.http.put(`${serverURL}/user/blog/edit`,data);
  }

  removeDraft(data:any){
    return this.http.delete(`${serverURL}/user/draft/remove/${data}`);
  }
  
  getDraft(data:any){
    return this.http.get(`${serverURL}/user/getdraft/${data}`);
  }
  
  editDraft(data:any){
    return this.http.put(`${serverURL}/user/draft/edit`,data);
  }

  removeBlog(data:any){
    return this.http.delete(`${serverURL}/user/blog/remove/${data}`);
  }
}
