import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/services/auth/auth.service';
import { UserService } from '../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
    username: new FormControl('', [Validators.minLength(5), Validators.required]),
    rePassword: new FormControl('', [Validators.minLength(5), Validators.required]),
  })

  constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) {}

  submit() {
    if (this.signUpForm.get('password')?.value != this.signUpForm.get('rePassword')?.value) { return; }

    this.authService.signup(this.signUpForm.get('email')?.value as string, 
                            this.signUpForm.get('password')?.value as string).then(async cred => {

      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        username: (this.signUpForm.get('username')?.value as string),
      };

      await this.userService.createUser(user);
      this.router.navigateByUrl("/login");
    }).catch(error => {
      console.error(error);
    });
  }
}
