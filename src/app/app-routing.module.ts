import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormPolicyComponent} from './form-policy/form-policy.component';

const routes: Routes = [
  {
    path: 'form-policy',
    component: FormPolicyComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
