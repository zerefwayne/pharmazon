import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SearchComponent} from './search/search.component';
import {ImageSearchComponent} from './search/image-search/image-search.component';
import {TextSearchComponent} from './search/text-search/text-search.component';
import {MedicineComponent} from './search/medicine/medicine.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/search'},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search/image', component: ImageSearchComponent},
  {path: 'search/text', component: TextSearchComponent},
  {path: 'medicine', component: MedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
