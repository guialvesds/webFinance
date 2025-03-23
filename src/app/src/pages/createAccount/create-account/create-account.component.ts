import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  criarContaForm: FormGroup;
  loading: boolean = false; 
  successMessage: string | null = null; 
  apiErrorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.criarContaForm = this.fb.group({
      primaryName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { validators: this.senhasCombinam });
  }

  // Validação personalizada para verificar se as senhas coincidem
  senhasCombinam(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('password')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCombinam: true };
  }

 public goToLogin() {
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.criarContaForm.valid) {
      this.loading = true; 
      this.successMessage = null; 
      this.apiErrorMessage = null; 

      this.http.post('http://localhost:8080/api/v1/users', this.criarContaForm.value)
        .subscribe({
          next: (response) => {
            this.loading = false; 
            this.successMessage = 'Cadastro realizado com sucesso!'; 
            this.criarContaForm.reset(); 
          },
          error: (error) => {
            this.loading = false; 
            if (error.status === 400 && error.error === "Email already exists") {
              this.apiErrorMessage = "Este email já está em uso. Por favor, use outro email.";
            } else {
              this.apiErrorMessage = "Ocorreu um erro ao cadastrar. Tente novamente mais tarde.";
            }
          }
        });
    }
  }
}