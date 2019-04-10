import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { appLiterals } from '../../../resources/appLiteral';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  formModel: FormModel = {};
  appLiterals;

  constructor(public authService: AuthService) {
    this.appLiterals = appLiterals;
  }

  ngOnInit() { }

}
