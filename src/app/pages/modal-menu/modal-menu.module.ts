import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalMenuPage } from './modal-menu.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ModalMenuPage],
  entryComponents: [ModalMenuPage]
})
export class ModalMenuPageModule {}
