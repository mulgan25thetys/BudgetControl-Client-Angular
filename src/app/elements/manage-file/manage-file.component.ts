import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as $ from "jquery";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-file',
  templateUrl: './manage-file.component.html',
  styleUrls: ['./manage-file.component.css']
})
export class ManageFileComponent implements OnInit {
  @Output() fileEmiter = new EventEmitter<any>()
  @Output() readFileEmiter = new EventEmitter<any>()
  @Input() uploadedFile : Boolean = false
  @Input() formAction : string = ''

  selectedFiles?: FileList;
  currentFile?: File;
  progressOnFileLoad = 0

  faTrash = faTrash

  OnFileLoad: Boolean = false;
  hasError: Boolean = false;
  typeAlert: string  ='';
  message: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.hasError = false
    console.clear()
  }

  selectFile(event: any): void {
    this.readURL(event)

    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0)
    
    if (file && !environment.fileMimeType.includes(file.name.split(".").pop())) {
      this.hasError = true
      this.message = "Only allow file extension: "+environment.fileMimeType.join(',')
      this.fileEmiter.emit({hasError : this.hasError})
    } 
    else if (file && file.size > parseInt(environment.fileMaxSize.toString()) ) {
      this.hasError = true
      this.message = ' max size allowed: ' + environment.fileMaxSize
      this.fileEmiter.emit({hasError : this.hasError})
    } else {
      this.hasError = false
      this.fileEmiter.emit({ hasError: this.hasError })
    }
    
    this.readFileEmiter.emit({
      selectedFiles: file? this.selectedFiles : null
    })
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

      if (file) {
          const reader = new FileReader();
      reader.onloadstart = e => {
        this.OnFileLoad = true
      }
        reader.onload = e => {
          this.progressOnFileLoad = Math.round(100 * e.loaded / e.total);
        };
        
        reader.onloadend = e => {
          this.OnFileLoad = false
        }
         reader.readAsDataURL(file);
      }
    }
  }
}