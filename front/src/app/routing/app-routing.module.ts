import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { BrandsComponent } from '../components/brands/brands.component';
import { BrandDetailComponent } from '../components/brand-detail/brand-detail.component';
import { CategoryComponent } from '../components/category/category.component';
import { CategoryDetailComponent } from '../components/category-detail/category-detail.component';
import { ProviderComponent } from '../components/provider/provider.component';
import { ProviderDetailComponent } from '../components/provider-detail/provider-detail.component';
import { ProductComponent } from '../components/product/product.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { PriceComponent } from '../components/price/price.component';
import { PriceDetailComponent } from '../components/price-detail/price-detail.component';
import { StockComponent } from '../components/stock/stock.component';
import { SaleComponent } from '../components/sale/sale.component';
import { StatsComponent } from '../components/stats/stats.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SignInComponent } from '../components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../components/authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../components/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../components/authentication/verify-email/verify-email.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { ChangeCardComponent } from '../components/change-card/change-card.component';


// Import canActivate guard services
import { AuthGuard } from '../guards/auth.guard';
import { SecureInnerPagesGuard } from '../guards/secure-inner-pages.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'brands', component: BrandsComponent, canActivate: [AuthGuard] },
  { path: 'brand/:id', component: BrandDetailComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'categories/:id', component: CategoryDetailComponent, canActivate: [AuthGuard] },
  { path: 'providers', component: ProviderComponent, canActivate: [AuthGuard] },
  { path: 'providers/:id', component: ProviderDetailComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'price', component: PriceComponent, canActivate: [AuthGuard] },
  { path: 'price/:id', component: PriceDetailComponent, canActivate: [AuthGuard] },
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
  { path: 'sale', component: SaleComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'subscription', component: SubscriptionComponent, canActivate: [AuthGuard] },
  { path: 'profile/changecard', component: ChangeCardComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
