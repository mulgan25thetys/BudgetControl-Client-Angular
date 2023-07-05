import { Component, OnInit } from '@angular/core';
import { Economie } from 'src/app/models/economie';
import { NgForm } from '@angular/forms';
import { EconomyService } from 'src/app/services/economy.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formName: string = 'Economy'
  
  // treatment 
  errorMessage: string = ''
  // model 
  economy = new Economie()

  constructor(private ecoServe:EconomyService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  addEconomy(form: NgForm) {
    this.ecoServe.addEconomy(this.economy).subscribe(res => {
      this.toastr.success(res.message, 'Add Economy')
      this.onInit(form)
    }, (err: HttpErrorResponse) => {
      this.toastr.error(err?.error?.message || err.statusText, "Add Economy")
    })
  }

  onInit(form: NgForm) {
    form.reset()
    this.ngOnInit()
    this.router.navigate(['/economies'])
  }
}
