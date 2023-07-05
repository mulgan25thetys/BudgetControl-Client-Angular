import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { MenusComponent } from './menus/menus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { ManageFileComponent } from './manage-file/manage-file.component';


@NgModule({
  declarations: [
    ElementsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PageheaderComponent,
    MenusComponent,
    PaginationComponent,
    DialogModalComponent,
    ManageFileComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, DialogModalComponent,
    LoaderComponent, PageheaderComponent, PaginationComponent, ManageFileComponent]
})
export class ElementsModule { }
