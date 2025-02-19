import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent },
  // { path: 'login', component: SigninComponent },
  // { path: 'signup', component: SignupComponent },
];
