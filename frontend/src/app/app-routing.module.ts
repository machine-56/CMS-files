import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { RegUserComponent } from './login/reg-user/reg-user.component';
import { AdminHomeComponent } from './adminViews/admin-home/admin-home.component';
import { UserHomeComponent } from './userViews/user-home/user-home.component';
import { AdminUserroleComponent } from './adminViews/admin-userrole/admin-userrole.component';
import { UserWriteComponent } from './userViews/user-write/user-write.component';
import { AdminCategoriesComponent } from './adminViews/admin-categories/admin-categories.component';
import { AdminWriteComponent } from './adminViews/admin-write/admin-write.component';
import { UserProfileComponent } from './userViews/user-profile/user-profile.component';
import { UserPostComponent } from './userViews/user-post/user-post.component';
import { UserDraftComponent } from './userViews/user-draft/user-draft.component';
import { UserEditComponent } from './userViews/user-edit/user-edit.component';
import { UserdEditComponent } from './userViews/userd-edit/userd-edit.component';
import { AdminProfileComponent } from './adminViews/admin-profile/admin-profile.component';
import { AdminEditComponent } from './adminViews/admin-edit/admin-edit.component';
import { AdminPostComponent } from './adminViews/admin-post/admin-post.component';
import { AdmindEditComponent } from './adminViews/admind-edit/admind-edit.component';
import { AdminDraftComponent } from './adminViews/admin-draft/admin-draft.component';
import { RouteGuard } from './service/route.guard';

const routes: Routes = [
  {path:'', component:LoginUserComponent},
  {path:'admin', component:LoginAdminComponent},
  {path:'register', component:RegUserComponent},
  {path:'user/home', component:UserHomeComponent, canActivate:[RouteGuard]},
  {path:'user/newblog', component:UserWriteComponent, canActivate:[RouteGuard]},
  {path:'user/profile', component:UserProfileComponent, canActivate:[RouteGuard]},
  {path:'user/edit', component:UserEditComponent, canActivate:[RouteGuard]},
  {path:'user/draft/edit', component:UserdEditComponent, canActivate:[RouteGuard]},
  {path:'user/userpost', component:UserPostComponent, canActivate:[RouteGuard]},
  {path:'user/userdraft', component:UserDraftComponent, canActivate:[RouteGuard]},
  {path:'admin/home', component:AdminHomeComponent, canActivate:[RouteGuard]},
  {path:'admin/users', component:AdminUserroleComponent, canActivate:[RouteGuard]},
  {path:'admin/newblog', component:AdminWriteComponent, canActivate:[RouteGuard]},
  {path:'admin/profile', component:AdminProfileComponent, canActivate:[RouteGuard]},
  {path:'admin/edit', component:AdminEditComponent, canActivate:[RouteGuard]},
  {path:'admin/userpost', component:AdminPostComponent, canActivate:[RouteGuard]},
  {path:'admin/userdraft', component:AdminDraftComponent, canActivate:[RouteGuard]},
  {path:'admin/draft/edit', component:AdmindEditComponent, canActivate:[RouteGuard]},
  {path:'admin/categories', component:AdminCategoriesComponent, canActivate:[RouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
