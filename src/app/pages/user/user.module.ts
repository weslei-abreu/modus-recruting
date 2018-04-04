import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserComponent } from './user.component';
import { UserRoutingModule, userRoutingComponents } from './user.routing';
import { environment } from '../../../environments/environment';
import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    UserRoutingModule,
  ],
  declarations: [
    UserComponent,
    userRoutingComponents,
    UserDetailsComponent
  ],
  exports: [
    userRoutingComponents
  ],
  providers: [
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class UserModule { }
