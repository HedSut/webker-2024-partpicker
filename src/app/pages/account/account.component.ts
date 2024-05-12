import { Component, OnInit } from '@angular/core';
import { Config } from '../../shared/models/Config';
import { UserService } from '../../shared/services/user/user.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.sass'
})
export class AccountComponent  implements OnInit{
  configs: Array<Config> = [];
  currentUser?: firebase.default.User | null;

  constructor(private userService: UserService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.currentUser = user;
      if (this.currentUser != null) {
        this.userService.getUserConfigs(this.currentUser?.uid ?? '').subscribe(configs => {
          this.configs = configs;
        })
      }
    });
  }

  deleteConfig(configid: string) {
    if (this.currentUser == null ) { return; }
    this.userService.deleteConfig(configid, this.currentUser?.uid);
  }
}
