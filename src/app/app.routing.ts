import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { PromosComponent } from './promos/promos.component';

import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { NearmeComponent } from './nearme/nearme.component';

const routes: Routes =[
    { path: '',             component: LandingComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'promos',            component: PromosComponent },
    { path: 'nearme',            component: NearmeComponent },
    // { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
     { path: 'sample', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
