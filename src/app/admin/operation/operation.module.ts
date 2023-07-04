import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation.component';
import { AddComponent } from './add/add.component';
import { HistoryComponent } from './history/history.component';
import { ElementsModule } from 'src/app/elements/elements.module';


@NgModule({
  declarations: [
    OperationComponent,
    AddComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    ElementsModule
  ]
})
export class OperationModule { }
