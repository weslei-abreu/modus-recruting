import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { User } from '../../model/user.model';

@Injectable()

export class UserService {

    private user: User[];
    private result;
    private USER_URL = 'https://randomuser.me/api/?results=20';

    constructor(private http: HttpClient) {

    }

    /**
     * getUser(): Observable<Response>
     * Consume User list api and return an array of User or an error, if occurs.
     * @return array of users
     */
    getUser(): Observable<User[]> {
        return this.http.get(this.USER_URL).map((result: any) => {
            this.user = result.results;
            return this.user;
        });
    }
}
