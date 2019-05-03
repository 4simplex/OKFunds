import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MpService } from './../../services/mp.service';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userUpdated: User;
  userMP;
  userSubscription;
  appLiterals;
  cardName;
  cardType;
  cardDigits;
  cardThumbnail;
  nextPayment;
  invoices;
  reloadUserSubscription;
  changeSubscription;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private mpService: MpService
  ) { }

  ngOnInit() {
    const currentStorage = localStorage.getItem('user');
    this.userUpdated = JSON.parse(currentStorage);
    if(this.userUpdated['customer'] !== ''){
      this.getUserCards(this.userUpdated);
      this.getUserSuscription(this.userUpdated);
    }
  }

  getUserCards(user) {
    this.mpService.getUserCards(user.customer)
      .subscribe(res => {
        this.userMP = res;

        if(this.userMP){
          let items = this.userMP.status.cards.length;
          this.cardName = this.userMP.status.cards[items - 1].payment_method.name;
          this.cardType = this.userMP.status.cards[items - 1].payment_method.payment_type_id;
          this.cardDigits = this.userMP.status.cards[items - 1].last_four_digits;
          this.cardThumbnail = this.userMP.status.cards[items - 1].payment_method.secure_thumbnail;
        }
        
      });
  }

  getUserSuscription(user) {
    this.mpService.getUserSuscription(user.subscription)
      .subscribe(res => {
        this.userSubscription = res;
        if(this.userSubscription){
          this.nextPayment = this.userSubscription.status.charges_detail.next_payment_date;
          this.invoices = this.userSubscription.status.charges_detail.invoices;
        }
      });
  }

  cancelSuscription(status) {
    //this.reloadUserSubscription = this.getUserSuscription(this.user);
    let currentUserLog = JSON.parse(window.localStorage.getItem('user'));
    this.mpService.cancelUserSuscription(this.userSubscription.status.id, status, currentUserLog.uid)
      .subscribe(res => {
        this.changeSubscription = res;
        if(this.changeSubscription.status.status === "authorized"){
          alert("Bienvenido nuevamente a Premium");
          window.location.href = '/profile';
        }

        if(this.changeSubscription.status.status === "paused"){
          alert("Cancelaste tu suscripción. Ahora estas en el plan gratuito");
          window.location.href = '/profile';
        }
      });
  }

}
