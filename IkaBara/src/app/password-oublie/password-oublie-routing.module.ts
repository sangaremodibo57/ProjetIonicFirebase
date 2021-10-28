import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordOubliePage } from './password-oublie.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordOubliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordOubliePageRoutingModule {}
