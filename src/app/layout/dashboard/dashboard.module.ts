import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
import { HomeComponent } from '../../pages/home/home.component';
import { DashboardRoutingModule } from './dashboard.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    DashboardRoutingModule,

  ],
  declarations: [
    DashboardComponent,
    MainNavbarComponent,

  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DashboardModule { }
