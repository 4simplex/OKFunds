import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validatePriceForm(priceForm: FormGroup): Boolean {
    if (!priceForm.get('productForm').value.product) {
      alert('Debe ingresar un Producto');
      return false;
    }

    if (!priceForm.get('provider').value._id) {
      alert('Debe ingresar un Proveedor');
      return false;
    }

    const purchasePrice = priceForm.get('purchasePrice').value;
    const salePrice = priceForm.get('salePrice').value;

    if (!purchasePrice || !salePrice) {
      alert('Debe ingresar valores para Precio de Compra y Precio de Venta');
      return false;
    }

    if (isNaN(Number(purchasePrice))) {
      alert('Precio de Compra, valor incorreto');
      return false;
    } else {
      if (Number(purchasePrice) < 0) {
        alert('Precio de Compra, negativo');
        return false;
      }
    }

    if (isNaN(Number(salePrice))) {
      alert('Precio de Venta, valor incorreto');
      return false;
    } else {
      if (Number(salePrice) < 0) {
        alert('Precio de Venta, negativo');
        return false;
      }
    }

    return true;
  }
}
