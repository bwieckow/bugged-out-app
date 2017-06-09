//This is a shared module
//Benefits of shared module: Let you import and export things that can be used by everything that imports the shared module
//The oposite of share module is CoreModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule ],       //Imports other modules you will use in this module
    declarations: [  ],  //Components, pipes
    exports: [ CommonModule ]        //Exports everything we want to be available 'across the app'
    //No providers because we dont share services across the app - it creates many bugs
})

export class SharedModule {

}