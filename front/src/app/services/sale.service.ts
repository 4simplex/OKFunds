import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from 'src/app/models/sale-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  constructor(private http: HttpClient) { }

  postSale(sale: Sale) {
    const user = JSON.parse(localStorage.getItem('user'));
    sale.user = user.uid;

    return this.http.post(environment.saleUrl, sale);
  }

  getSales(firstDate, secondDate) {
    const userId = JSON.parse(localStorage.getItem('user')).uid;
    return this.http.get(environment.saleUrl + `/${userId}` + `/${firstDate}` + `/${secondDate}`);
  }
}
