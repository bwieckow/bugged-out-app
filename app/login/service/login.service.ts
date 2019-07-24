import {Injectable} from '@angular/core';
import {FirebaseConfigService} from '../../core/service/firebase-config.service';

import {Observable} from "rxjs/Observable";

import {User} from '../model/user';
import {error} from "util";


@Injectable()
export class LoginService {

    private usersDbRef = this.fireService.database.ref('/users'); //We can also do this *.ref().child('bugs') -- *ref() with empty
                                                                //brackets points to root

    constructor(private fireService: FirebaseConfigService) {

    }

    getAddedUsers(): Observable<any> {
        return Observable.create(obs => {
            this.usersDbRef.on('child_added', user => {           //Here we are setting up the listener
                    const newUser = user.val() as User;
                    newUser.id = user.key;
                    obs.next(newUser);
                },
                err => {
                    obs.throw(err);
                });
        });
    }

}