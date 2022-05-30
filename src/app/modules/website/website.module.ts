import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink'
import { WebsiteRoutingModule } from './website-routing.module';

import { AboutComponent } from './components/about/about.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    CatalogoComponent,
    AboutComponent,
    HomeComponent,
    NavBarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    QuicklinkModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
