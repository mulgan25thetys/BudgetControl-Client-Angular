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


@NgModule({
  declarations: [
    ElementsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PageheaderComponent,
    MenusComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    FontAwesomeModule
  ],
  exports: [ SidebarComponent, HeaderComponent, FooterComponent, LoaderComponent, PageheaderComponent]
})
export class ElementsModule { }
