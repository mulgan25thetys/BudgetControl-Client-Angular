import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementsModule } from '../elements/elements.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ElementsModule
  ]
})
export class AdminModule { }
