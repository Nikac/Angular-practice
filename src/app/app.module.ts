import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';
import { UserEditComponent } from './users-list/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    UsersListComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
