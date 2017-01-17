import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouter } from './app.router';
import { AuthService } from './auth.service'; 
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouter
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
