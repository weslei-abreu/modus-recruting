import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserListComponent } from './../../pages/user/user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'details', component: UserDetailsComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

export const userRoutingComponents = [
  UserListComponent,
];
