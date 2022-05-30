import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink'

import { CmsRoutingModule } from './cms-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    QuicklinkModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
