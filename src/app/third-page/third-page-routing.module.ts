import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdPagePage } from './third-page.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdPagePageRoutingModule {}
