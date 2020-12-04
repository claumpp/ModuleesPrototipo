import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebmapComponent } from './webmap/webmap.component';
import {ContainerComponent} from './container/container.component';
import {DetailComponent} from "./detail/detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/webmap', pathMatch: 'full' },
  { path: '', component: ContainerComponent, children: [
    {
      path: 'webmap',
      component: WebmapComponent
    },
    {
      path: 'detail/:rc',
      data: {
        title: 'Detail'
      },
      component: DetailComponent
    }
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
