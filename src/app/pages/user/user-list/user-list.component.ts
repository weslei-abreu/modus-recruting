import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


import { User } from '../../../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})

export class UserListComponent implements OnInit {

  usersList: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.getUserList();
  }

  /**
 * This method is responsible to get a list of users
 */
  getUserList() {
    this.userService.getUser().subscribe(
      (dataResponse: User[]) => {
        this.usersList = dataResponse;
      },
      error => {
        alert('Error to list th users');
      });


  }

  userDetails(user: User) {

    this.router.navigate(['/user/details'])
  }

}
