import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './src/pages/createAccount/create-account/create-account.component';
import { NgModule } from '@angular/core';

// Exporte o array de rotas
export const routes: Routes = [
  { path: '', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }