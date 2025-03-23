import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './src/pages/createAccount/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './src/pages/login/login.component';
import { HomeComponent } from './src/pages/home/home.component';


export const routes: Routes = [
  { path: 'account', component: CreateAccountComponent},
   {path: '', component: LoginComponent},
   {path: 'home', component: HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }