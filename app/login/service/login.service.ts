import {Injectable} from '@angular/core';
import {FirebaseConfigService} from '../../core/service/firebase-config.service';

import {Observable} from "rxjs/Observable";

import {User} from '../model/user';
import {error} from "util";


@Injectable()
export class LoginService {

    private usersDbRef = this.fireService.database.ref('/users'); //We can also do this *.ref().child('bugs') -- *ref() with empty
                                                                //brackets points to root
    private users: User[] = [];
    isLogged = false;
    
    constructor(private fireService: FirebaseConfigService) {
        //TODO: subscribe should not be in service
        this.getAddedUsers().subscribe(user => {
            this.users.push(user);
        },
        err => {
            console.error("Unable to get added users - ", err);
        });
    }

    authenticate(email: string, password: string): Boolean {
        this.users.forEach(user => {
            console.log(user);
            
            if (user.email == email && user.password == password) {
                this.isLogged = true;
            }

            
        });
        console.log(this.isLogged);

        return this.isLogged;
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