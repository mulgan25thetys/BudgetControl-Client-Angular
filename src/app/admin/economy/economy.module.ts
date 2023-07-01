import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomyRoutingModule } from './economy-routing.module';
import { EconomyComponent } from './economy.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ElementsModule } from 'src/app/elements/elements.module';


@NgModule({
  declarations: [
    EconomyComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EconomyRoutingModule,
    ElementsModule
  ]
})
export class EconomyModule { }
