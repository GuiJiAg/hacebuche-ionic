import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WinesInsertUpdatePage } from './wines-insert-update.page';

const routes: Routes = [
  {
    path: '',
    component: WinesInsertUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WinesInsertUpdatePage]
})
export class WinesInsertUpdatePageModule {}
