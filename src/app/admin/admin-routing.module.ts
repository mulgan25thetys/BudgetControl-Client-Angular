import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OperationComponent } from './operation/operation.component';
import { EconomyComponent } from './economy/economy.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  {
    path: '',
    component: OperationComponent,
    children: [
      { path: 'operations', loadChildren: () => import('./operation/operation.module').then(m => m.OperationModule) }
    ]
  },
  {
    path: '',
    component: EconomyComponent,
    children: [
       { path: 'economies', loadChildren: () => import('./economy/economy.module').then(m => m.EconomyModule) },
    ]
  },
  {
    path: '',
    component: SettingsComponent,
    children: [
       { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
