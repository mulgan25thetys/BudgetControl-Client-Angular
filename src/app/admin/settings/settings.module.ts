import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { DevisesComponent } from './devises/devises.component';
import { ElementsModule } from 'src/app/elements/elements.module';
import { FormsModule } from '@angular/forms';
import { AddDevisesComponent } from './add-devises/add-devises.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    SettingsComponent,
    DevisesComponent,
    AddDevisesComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ElementsModule,
    FormsModule,
    NgSelectModule
  ]
})
export class SettingsModule { }
