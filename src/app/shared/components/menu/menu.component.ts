import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent implements OnInit{
  currentRoute: string = "";
  currentUser?: firebase.default.User | null;
  
  constructor(private router: Router, private authService: AuthService) {}

  
  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.currentUser = user;
    }, error => {
      console.error(error);
      this.currentUser = null;
    });
  }

  logout() {
    this.authService.logout().then(() =>{
      console.log("logged out");
    })
  }


}
