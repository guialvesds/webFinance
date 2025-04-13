import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  loading: boolean = false; 
  apiErrorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }, {});
  }

  public goToAccount() {
    this.router.navigate(['account']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true; 

      console.log("começou");
      this.http.post<string>('http://localhost:8080/api/v1/auth/login', this.loginForm.value, { responseType: 'text' as 'json' })
  .subscribe({
    next: (response) => {
      this.loading = false; 
      this.apiErrorMessage = null;
      this.loginForm.reset(); 

      if(response == "Login Successful") {
        this.router.navigate(['dash/home']);

      }
    },
    error: (error) => {
      console.error("Erro na requisição:", error); // Log do erro completo
      this.loading = false; 
      this.apiErrorMessage = "Ocorreu um erro ao logar. Tente novamente mais tarde.";
    }
  });
    }
  }


}
