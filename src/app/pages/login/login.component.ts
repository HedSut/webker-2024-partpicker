import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });

  loading: boolean = false;

  constructor(private location: Location, private authService: AuthService, private router: Router) {}

  async login() {
    this.loading = true;

    this.authService.login(this.loginForm.get('email')?.value as string,
      this.loginForm.get('password')?.value as string).then(cred => {
        this.loading = false;
        this.router.navigateByUrl('/');
      }).catch(error => {
        this.loading = false;
        console.error(error);
      });
  }

  goBack() {
    this.location.back();
  }
}
