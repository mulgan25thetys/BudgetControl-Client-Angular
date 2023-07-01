import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';


@NgModule({
  declarations: [
    ElementsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PageHeadingComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [ SidebarComponent, HeaderComponent, FooterComponent, LoaderComponent, PageHeadingComponent]
})
export class ElementsModule { }
