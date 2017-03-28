import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipelinesSearchComponent, PipelinesEditComponent } from './pipelines';
import { ServicesSearchComponent, ServicesEditComponent } from './services';

/**
 * Root routing module.
 */
const appRoutes: Routes = [
  { path: 'pipelines/search', component: PipelinesSearchComponent, },
  { path: 'pipelines/edit/:id', component: PipelinesEditComponent },

  { path: 'services/search', component: ServicesSearchComponent, },
  { path: 'services/edit/:id', component: ServicesEditComponent },

  { path: '**', redirectTo: '/pipelines/search', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true // For JBoss deployment
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }