import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { appLiterals } from '../../../resources/appLiteral';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  formModel: FormModel = {};
  name: String;
  email: String;
  passwordField: String;
  confirmPasswordField: String;
  appLiterals;

  constructor(public authService: AuthService) {
    this.appLiterals = appLiterals;
  }

  ngOnInit() { }

}
