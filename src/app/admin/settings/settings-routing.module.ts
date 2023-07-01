import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevisesComponent } from './devises/devises.component';

const routes: Routes = [
  { path: '', redirectTo: 'devises', pathMatch: 'full' },
  { path: 'devises', component: DevisesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
