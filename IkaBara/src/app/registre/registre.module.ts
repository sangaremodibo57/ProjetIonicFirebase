import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrePageRoutingModule } from './registre-routing.module';

import { RegistrePage } from './registre.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrePageRoutingModule
  ],
  declarations: [RegistrePage]
})
export class RegistrePageModule {}
