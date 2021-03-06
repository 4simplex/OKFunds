import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { PriceService } from '../../services/price.service';
import { NgForm } from '@angular/forms';
import { Provider } from 'src/app/models/provider-model';
import { RemoveWhiteSpaces } from '../../helpers/customValidators';
import { appLiterals } from '../../resources/appLiteral';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  selectedProvider: Provider;
  providers: Provider[];
  currentPage: Number = 1;
  appLiterals;
  loading: boolean;
  emptyProviderList: boolean;

  constructor(private providerService: ProviderService, private priceService: PriceService) {
    this.selectedProvider = new Provider();
    this.appLiterals = appLiterals;
  }

  ngOnInit() {
    this.loading = true;
    this.getProviders();
  }

  getProviders() {
    this.providerService.getProviders()
      .subscribe(res => {
        this.loading = false;
        this.providers = res as Provider[];
        this.emptyProviderList = (typeof this.providers === 'undefined' || this.providers.length <= 0);
      });
  }

  addProvider(form: NgForm) {
    if (form.controls.name.value.trim() === '') {
      alert('Dato no válido. Debe escribir un proveedor');
      return;
    }

    let name = form.controls.name.value;
    const nameWithOneSpace = RemoveWhiteSpaces(name);
    const id = 'noId';

    this.providerService.getProviderByName(nameWithOneSpace, id)
      .subscribe(res => {
        if (res != null) {
          if (nameWithOneSpace.toLowerCase() === res.name.toLowerCase()) {
            alert('El Proveedor ya existe');
          }
        } else {
          if (!nameWithOneSpace) { return; }
          name = nameWithOneSpace;
          const info = form.controls.info.value;
          this.providers = [];
          this.emptyProviderList = false;
          this.loading = true;
          this.providerService.postProvider({ name, info } as Provider)
            .subscribe(() => {
              this.getProviders();
              this.selectedProvider._id = '';
              this.selectedProvider.name = '';
              this.selectedProvider.info = '';
            });
        }
      });
  }

  editProvider(provider: Provider) {
    this.providerService.selectedProvider = provider;
  }

  deleteProvider(_id: string) {
    this.priceService.getPriceByProvider(_id)
      .subscribe(price => {
        if (price !== null) {
          alert('No se puede eliminar porque hay precios registrados para este proveedor');
        } else {
          if (confirm('Está seguro de querer eliminarlo?')) {
            this.providers = [];
            this.loading = true;
            this.providerService.deleteProvider(_id)
              .subscribe(() => {
                this.getProviders();
              });
          }
        }
      });
  }

}
