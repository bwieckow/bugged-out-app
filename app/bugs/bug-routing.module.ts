import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugListComponent} from './bug-list/bug-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'bugs', component: BugListComponent }
            //{ path: '**', redirectTo: 'bugs' } // in case if someone type ROOT_URL/kskdkmkmsd this route will handle this and redirect to default path. '**' means everything
        ])
    ],
    exports: [ RouterModule ]
})

export class BugRoutingModule {

}