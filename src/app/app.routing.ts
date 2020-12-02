import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebmapComponent } from './webmap/webmap.component';
import {ContainerComponent} from './container/container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/webmap', pathMatch: 'full' },
  { path: '', component: ContainerComponent, children: [
    {
      path: 'webmap',
      component: WebmapComponent
    }
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
