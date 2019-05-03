import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { appLiterals } from '../../resources/appLiteral';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appLiterals;
  premium: boolean;

  constructor(public authService: AuthService, private router: Router) {
      this.appLiterals = appLiterals;
    }

  ngOnInit() {
    const storage = JSON.parse(localStorage.getItem('user'));
    if(storage){
      this.premium = storage.premium;
    }
    
  }

}
