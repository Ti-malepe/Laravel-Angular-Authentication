import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { SignMeUpComponent } from './component/sign-me-up/sign-me-up.component';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignMeUpComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
