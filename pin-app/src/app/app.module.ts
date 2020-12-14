import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleModalModule } from 'ngx-simple-modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeComponent } from './views/theme/theme.component';
import { PoolComponent } from './views/pool/pool.component';
import { PostComponent } from './views/post/post.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { fromEventPattern } from 'rxjs';
import { UserComponent } from './views/user/user.component';
import { AddthemeComponent } from '../app/modals/addtheme.component';
import { EditthemeComponent } from '../app/modals/edittheme.component';
import { DeletethemeComponent } from '../app/modals/deletetheme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeComponent,
    PoolComponent,
    PostComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    AddthemeComponent,
    EditthemeComponent,
    DeletethemeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SimpleModalModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
