import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation.component';
import { AddComponent } from './add/add.component';
import { HistoryComponent } from './history/history.component';
import { ElementsModule } from 'src/app/elements/elements.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    OperationComponent,
    AddComponent,
    HistoryComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    ElementsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class OperationModule { }
