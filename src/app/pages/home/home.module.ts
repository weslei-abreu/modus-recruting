import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HomeRoutingModule,
  ],
  providers: [
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomeModule { }
