import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginForm: FormGroup;

  constructor( public formbuilder: FormBuilder, public authService: AuthService, public router: Router ) {

  	this.loginForm = this.formbuilder.group({
  		email: ['', [Validators.required]],
  		password: ['', [Validators.required]],
  	});

  }

  // Função disparada quando clicarmos no botão de login
  loginUsuario( form ) {
  }


}
