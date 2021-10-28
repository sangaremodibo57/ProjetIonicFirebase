import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordOubliePageRoutingModule } from './password-oublie-routing.module';

import { PasswordOubliePage } from './password-oublie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordOubliePageRoutingModule
  ],
  declarations: [PasswordOubliePage]
})
export class PasswordOubliePageModule {}
