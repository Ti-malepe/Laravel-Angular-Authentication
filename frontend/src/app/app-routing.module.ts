import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { SignMeUpComponent } from './component/sign-me-up/sign-me-up.component';
import { ProfileComponent } from './component/profile/profile.component';


const appRoutes: Routes =[
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'SignUp',
  component: SignMeUpComponent
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'request-password-reset',
  component: RequestResetComponent
},
{
  path: 'response-password-reset',
  component: RequestResetComponent
},

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
