import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { DevisesComponent } from './devises/devises.component';
import { ElementsModule } from 'src/app/elements/elements.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [
    SettingsComponent,
    DevisesComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ElementsModule,
    DataTablesModule
  ]
})
export class SettingsModule { }
