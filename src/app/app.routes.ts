import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

export const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'account', component: CreateAccountComponent },
  // { path: 'home', component: HomeComponent }
  { path: '', component: LoginComponent },
  { path: 'account', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'documentation', component: DocumentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }