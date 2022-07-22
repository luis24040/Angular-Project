import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AuthGuard } from './guard/auth.guard';
import { MainComponent } from './admin/main/main.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';


const routes:Routes = [
  {
    path:'home', component: HomeComponent, title:"Home page"
  },
  {
    path: "admin", component: MainComponent, title:"Admin",canActivate:[ AuthGuard ]
  },
  {
    path:'about', component: AboutComponent, title:"About"
  },
  {
    path:'dashboard', component: DashboardComponent, title:"Dashboard"
  },
  {
    path:'login', component: LoginComponent, title:"Login"
  },
  {
    path: 'posts', component: PostsComponent, title: "Posts", data: { pageRouteName: 'Posts' }
  },
  {
    path: 'comments', component: CommentsComponent, title: "Comments", data: { pageRouteName: 'comments' }
  },
  {
    path:'maintenance', component: MaintenanceComponent, title:"Maintenance"
  },
  {
    path:'', pathMatch: 'full', redirectTo:'/home'
  },
  {
    path: "**", component: NotfoundComponent, title:"Not Found"
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
