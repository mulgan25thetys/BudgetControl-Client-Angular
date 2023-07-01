import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation.component';
import { AddComponent } from './add/add.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    OperationComponent,
    AddComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule
  ]
})
export class OperationModule { }
