import { Component, OnInit, Input } from '@angular/core';
import { faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CapitalService } from 'src/app/services/capital.service';
import { DeviseService } from 'src/app/services/devise.service';
import { OperationService } from 'src/app/services/operation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { SystemService } from '../../services/system/system.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {
  @Input() pagePretitle : string = 'overview'
  @Input() pageTitle: string = 'dashboard'
  @Input() itemModule: string = 'module'
  @Input() withAddingModuleButton: Boolean = false
  @Input() withReport: Boolean = false

  @Input() withAddingModuleButtonByLink: Boolean = false
  @Input() addingLink: string
  
  addPlus = faPlus
  downLoadIcon = faDownload

  constructor(private systemServe:SystemService, private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

  generateReport() {
    this.systemServe.getReport(this.itemModule == 'dashboard'? 'capitals' : this.itemModule+'s').subscribe(res => {
      this.downloadMyFile(this.itemModule == 'dashboard'? 'capitals' : this.itemModule+'s')
    }, (err: HttpErrorResponse) => {
      if (err.status == 200) {
        this.downloadMyFile(this.itemModule == 'dashboard'? 'capitals' : this.itemModule+'s')
      } else {
        this.toastr.error(err?.error?.message || err.statusText, 'Generate report')
      }
    })
  }

  downloadMyFile(filename) {
    this.itemModule == 'dashboard'? 'capitals' : this.itemModule+'s'
    this.systemServe.get_system_info().subscribe(res => {
      const link = document.createElement('a');
      filename = res.data.name + '-' + filename + '.csv'
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '/api/reports'+'/'+filename);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
  }
}
