import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './partial/header/header.component';
import { FooterComponent } from './partial/footer/footer.component';
import { MenuComponent } from './partial/menu/menu.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MainComponent } from './admin/main/main.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MaintenanceComponent,
    MainComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
