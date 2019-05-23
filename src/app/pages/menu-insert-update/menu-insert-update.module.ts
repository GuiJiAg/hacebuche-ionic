import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuInsertUpdatePage } from './menu-insert-update.page';

const routes: Routes = [
  {
    path: '',
    component: MenuInsertUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuInsertUpdatePage]
})
export class MenuInsertUpdatePageModule {}
