import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true, // Marca o componente como standalone
  imports: [ReactiveFormsModule, CommonModule], // Importa módulos necessários
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  criarContaForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.criarContaForm = this.fb.group({
      primaryName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { validators: this.senhasCombinam }); // Corrigido para 'validators'
  }

  // Validação personalizada para verificar se as senhas coincidem
  senhasCombinam(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('password')?.value; // Corrigido para 'password'
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCombinam: true };
  }

  onSubmit() {
    if (this.criarContaForm.valid) {
      this.http.post('http://localhost:8080/api/v1/users', this.criarContaForm.value)
        .subscribe({
          next: (response) => {
            console.log('Conta criada com sucesso', response);
          },
          error: (error) => {
            console.error('Erro ao criar conta', error);
          }
        });
    } else {
      console.log('Formulário inválido');
    }
  }
}