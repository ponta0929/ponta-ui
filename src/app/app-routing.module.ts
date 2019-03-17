import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '', redirectTo: 'active-container', pathMatch: 'full' },
  { path : 'active-container', loadChildren : './active-container/active-container.module#ActiveContainerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
