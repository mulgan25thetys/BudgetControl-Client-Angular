import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  selectedFiles?: FileList;
 
  hasError: Boolean = false;
  readyToUpload: Boolean = false;
  disabledVideoId: boolean = false;
  mustUploadFile: Boolean = false;
  errorMessage: string = ''

  formName: string = 'Operation'
  
  // model
  operation = new Operation()

  constructor(private opServe:OperationService, private toarstr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.operation.category = 'default'
  }

  addOperation(form:NgForm) {
    this.opServe.addOperation(this.operation).subscribe(res => {
      if (this.selectedFiles) {
        this.uploadFile(form, this.selectedFiles, res.data.id)
      } else {
        this.onInit(form)
      }
    }, (err: HttpErrorResponse) => {
      if (err.status == 409) {
        this.toarstr.warning('Operation object is already exist!','Add  Operation')
      } else {
        this.toarstr.error(err?.error?.message || err.statusText,'Add  Operation')
      }
    })
  }

  readFileEmiter(event:any) {
    this.selectedFiles = event?.selectedFiles
    this.readyToUpload = this.selectedFiles? true :false
  }

  getFileMessage(event: any) {
    this.hasError = event.hasError
  }

  uploadFile(form:NgForm,selectedFiles:FileList, idModule: number): any {

      const file: File | null = !selectedFiles ? null : selectedFiles.item(0);
     
        let currentFile = file;
        
        this.opServe.upload(currentFile,idModule).subscribe(
        (res) => {
            this.hasError = false
            this.onInit(form)
        },
          (err: HttpErrorResponse) => {
          this.hasError = true
          sessionStorage.setItem('file_operation','not_upload')
          if (err?.error && err?.error.message) {
            this.errorMessage = err?.error.message;
          } else {
            this.errorMessage = 'Could not upload the file!';
          }
          currentFile = undefined;
        })
  }

  onInit(form:NgForm) {
    if (!this.hasError) {
      form.reset()
      this.ngOnInit()
      this.selectedFiles = null
      this.router.navigate(['/operations/'])
    }
  }
}
