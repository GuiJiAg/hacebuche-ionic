import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalWinesPage } from './modal-wines.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ModalWinesPage],
  entryComponents: [ModalWinesPage]
})
export class ModalWinesPageModule {}
