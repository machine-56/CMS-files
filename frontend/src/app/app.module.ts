import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { RegUserComponent } from './login/reg-user/reg-user.component';
import { UserHomeComponent } from './userViews/user-home/user-home.component';
import { AdminHomeComponent } from './adminViews/admin-home/admin-home.component';
import { AdminUserroleComponent } from './adminViews/admin-userrole/admin-userrole.component';
import { AdminNavComponent } from './adminViews/admin-nav/admin-nav.component';
import { UserWriteComponent } from './userViews/user-write/user-write.component';
import { UserNavComponent } from './userViews/user-nav/user-nav.component';
import { AdminCategoriesComponent } from './adminViews/admin-categories/admin-categories.component';
import { AdminWriteComponent } from './adminViews/admin-write/admin-write.component';
import { UserProfileComponent } from './userViews/user-profile/user-profile.component';
import { UserPostComponent } from './userViews/user-post/user-post.component';
import { UserDraftComponent } from './userViews/user-draft/user-draft.component';
import { UserEditComponent } from './userViews/user-edit/user-edit.component';
import { UserdEditComponent } from './userViews/userd-edit/userd-edit.component';
import { AdminProfileComponent } from './adminViews/admin-profile/admin-profile.component';
import { AdminPostComponent } from './adminViews/admin-post/admin-post.component';
import { AdminEditComponent } from './adminViews/admin-edit/admin-edit.component';
import { AdminDraftComponent } from './adminViews/admin-draft/admin-draft.component';
import { AdmindEditComponent } from './adminViews/admind-edit/admind-edit.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AdminService } from './service/admin.service';
import { UserService } from './service/user.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    LoginUserComponent,
    RegUserComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminUserroleComponent,
    AdminNavComponent,
    UserWriteComponent,
    UserNavComponent,
    AdminCategoriesComponent,
    AdminWriteComponent,
    UserProfileComponent,
    UserPostComponent,
    UserDraftComponent,
    UserEditComponent,
    UserdEditComponent,
    AdminProfileComponent,
    AdminPostComponent,
    AdminEditComponent,
    AdminDraftComponent,
    AdmindEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService,
    UserService,
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
