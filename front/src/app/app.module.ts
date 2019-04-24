import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandService } from './services/brand.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { ValidateService } from './services/validate.service';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandDetailComponent } from './components/brand-detail/brand-detail.component';
import { BrandSelectorComponent } from './components/brand-selector/brand-selector.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { CategoryService } from './services/category.service';
import { ProviderService } from './services/provider.service';
import { ProviderComponent } from './components/provider/provider.component';
import { ProviderDetailComponent } from './components/provider-detail/provider-detail.component';
import { ProviderSelectorComponent } from './components/provider-selector/provider-selector.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { PriceComponent } from './components/price/price.component';
import { PriceDetailComponent } from './components/price-detail/price-detail.component';
import { PriceService } from './services/price.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StockComponent } from './components/stock/stock.component';
import { SaleComponent } from './components/sale/sale.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChartgraphComponent } from './components/chartgraph/chartgraph.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { registerLocaleData } from '@angular/common';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_LANGUAGE, RecaptchaModule } from 'ng-recaptcha';
import localeEsAr from '@angular/common/locales/es-AR';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/authentication/verify-email/verify-email.component';

// Auth service
import { AuthService } from './services/auth.service';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ChangeCardComponent } from './components/change-card/change-card.component';

registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    BrandsComponent,
    BrandDetailComponent,
    BrandSelectorComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CategorySelectorComponent,
    ProviderComponent,
    ProviderDetailComponent,
    ProviderSelectorComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductSelectorComponent,
    UploadImageComponent,
    PriceComponent,
    PriceDetailComponent,
    SpinnerComponent,
    StockComponent,
    SaleComponent,
    StatsComponent,
    ChartgraphComponent,
    NotFoundComponent,
    ConfirmEqualValidatorDirective,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SubscriptionComponent,
    ChangeCardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    ChartsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot(),
    ShowHidePasswordModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],

  providers: [
    BrandService,
    CategoryService,
    ProviderService,
    PriceService,
    ValidateService,
    AuthService,
    { provide: LOCALE_ID, useValue: 'es-Ar' },
    { provide: RECAPTCHA_LANGUAGE, useValue: 'es-Ar' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
