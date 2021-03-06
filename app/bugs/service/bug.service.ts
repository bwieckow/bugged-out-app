import {Injectable} from '@angular/core';
import {FirebaseConfigService} from '../../core/service/firebase-config.service';

import {Observable} from "rxjs";

import {Bug} from '../model/bug';


@Injectable()
export class BugService {

    private bugsDbRef = this.fireService.database.ref('/bugs'); //We can also do this *.ref().child('bugs') -- *ref() with empty
                                                                //brackets points to root

    constructor(private fireService: FirebaseConfigService) {

    }

    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {           //Here we are setting up the listener
                    const newBug = bug.val() as Bug;
                    newBug.id = bug.key;
                    obs.next(newBug);
                },
                err => {
                    obs.throw(err);
                });
        });
    }

    changedListener(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_changed', bug => {
                const updatedBug = bug.val() as Bug;
                updatedBug.id = bug.key;
                obs.next(updatedBug);
            },
            err => {
                obs.throw(err);
            });
        });
    }

    addBug(bug: Bug) {
        const newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Bartek',
            createdDate: Date.now()
        })
        .catch(err => console.error("Unable to add bug to firebase - ", err));
    }

    updateBug(bug: Bug) {
        const currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Ryszard"; // TODO: In case having users
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    }
}