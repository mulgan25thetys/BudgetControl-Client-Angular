import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from 'src/app/services/operation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Operation } from 'src/app/models/operation';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  operation = new Operation()
  
  constructor(private route: ActivatedRoute, private router:Router,
    private opServe: OperationService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      if (p.id) {
        this.getOperation(p.id)
      } else {
        this.router.navigateByUrl('/operation')
      }
    })
  }

  getOperation(id:number) {
    this.opServe.getOperation(id).subscribe(res => {
      this.operation = res.data
    }, (err: HttpErrorResponse) => {
      this.toastr.error(err?.error?.message || err?.statusText, ' View Operation')
      this.router.navigateByUrl('/page-not-found')
    })
  }

  backToList() {
    this.router.navigateByUrl('/operations')
  }
}
