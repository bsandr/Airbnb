import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor( public formbuilder: FormBuilder, public authService: AuthService, public router: Router ) {

  	this.registerForm = this.formbuilder.group({
  		name: ['', [Validators.required]],
  		email: ['', [Validators.required]],
  		password: ['', [Validators.required]],
  		c_password: ['', [Validators.required]],
  	});

  }

  ngOnInit() {
  }

  // Função chamada quando nós enviarmos o form
  registrarUsuario( registerForm ) {

    // Se o registro for válido
    if ( registerForm.status == "VALID" ) {

      // "Observa" a resposta do back
      this.authService.registrarUsuario( registerForm.value ).subscribe(
        // Quando a resposta chegar...
        (res) => {
          // Mostre a mensagem
          console.log( res.message );
          // Me leve pra home
          this.router.navigate(['home']);
        }
      );

    }

  }

}
