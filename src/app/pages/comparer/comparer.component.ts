import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { Config } from '../../shared/models/Config';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-comparer',
  templateUrl: './comparer.component.html',
  styleUrl: './comparer.component.sass'
})
export class ComparerComponent implements OnInit {
  configs: Array<Config> = [];
  currentUser?: firebase.default.User | null;

  constructor(private userService: UserService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.currentUser = user;

      if (this.currentUser == null) { return; }
      this.userService.getUserConfigs(this.currentUser.uid).subscribe(configs => {
        this.configs = configs;
      })
    })
  }

}
