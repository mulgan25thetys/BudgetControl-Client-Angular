import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capital.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberCapitalToReturn : number = 2
  currentCapital: any 

  expenseOperation: Operation[] = []
  receiptOperation: Operation[] = []
  operations: Operation[] = []

  constructor(private capitalServe:CapitalService, private opServe:OperationService) { }

  ngOnInit(): void {
    this.getCurrentCapital()
    this.getIncomeStatement()
  }

  getCurrentCapital() {
    this.capitalServe.getWealth().subscribe(res => {

      this.currentCapital = res.data
    }, (err : HttpErrorResponse) => {
      console.log(err);
    })
  }

  getIncomeStatement() {
    this.opServe.getOperations(1, 1, 'no').subscribe(res => {
      this.operations = res.data
      this.expenseOperation = this.operations.filter(op => op.category == 'expense')
      this.receiptOperation = this.operations.filter(op => op.category == 'receipt')

      console.log(this.receiptOperation, this.expenseOperation);
      
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }
}
