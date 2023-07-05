import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomyRoutingModule } from './economy-routing.module';
import { EconomyComponent } from './economy.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ElementsModule } from 'src/app/elements/elements.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    EconomyComponent,
    AddComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    EconomyRoutingModule,
    ElementsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class EconomyModule { }
