//This is feature module
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Component
import { BugListComponent } from '../bugs/bug-list/bug-list.component';
import { BugDetailComponent } from '../bugs/bug-detail/bug-detail.component';

//Service
import { BugService } from '../bugs/service/bug.service';

@NgModule({
    imports: [              //Imports are for Modules
        SharedModule,
        ProjectsRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [         //Declarations are for components and thing related to layout
        BugListComponent,
        BugDetailComponent
    ],
    exports: [ ],       //Exports let passing elements through
    providers: [            //Providers are for services
        BugService
    ]
})

export class ProjectsModule {

}