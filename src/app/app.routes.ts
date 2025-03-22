import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './src/pages/createAccount/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './src/pages/login/login.component';


export const routes: Routes = [
  { path: '', component: CreateAccountComponent},
   {path: 'login', component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }