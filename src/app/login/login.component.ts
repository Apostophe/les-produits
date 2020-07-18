import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    console.log('Tentative de connexion');
    //Ajouter la vérification du login et du mot de passe
    localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    this.router.navigate(['/home']);
  }
}