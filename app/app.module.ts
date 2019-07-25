// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from './bugs/bug.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

//Component
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';


@NgModule({
    imports: [
        BrowserModule,
        BugModule,
        AppRoutingModule,
        LoginModule,
        RegisterModule,
        CoreModule.forRoot()
    ],
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}