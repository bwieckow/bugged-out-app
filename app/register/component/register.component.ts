import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from "../service/register.service";
import { User } from '../../login/model/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from '@angular/router/src/utils/collection';

@Component({
    moduleId: module.id,
    selector: 'register-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    private users: User[] = [];
    //currentUser: User;
    registerForm: FormGroup;
    isWrongCredentials = true;
    isRegistered = false;
    @Input() currentUser = new User(null, null, null, null, null);

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private registerService: RegisterService) {
            
    }

    ngOnInit() {
        this.configureForm();
    }

    configureForm(user?: User) {                                                       //This is a reactive form creating
        if (user) {
            this.currentUser = new User(
                user.id,
                user.firstName,
                user.lastName,
                user.email,
                user.password
            );
        }

        this.registerForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            password: ['']
        });
    }

    onSubmit() {
        
            this.currentUser.firstName = this.registerForm.value["firstName"];
            this.currentUser.lastName = this.registerForm.value["lastName"];
            this.currentUser.email = this.registerForm.value["email"];
            this.currentUser.password = this.registerForm.value["password"];
    
            if (this.currentUser.id) {
                //this.updateUser();
            } else {
                this.addUser();
                this.isRegistered = true;
                this.router.navigate(['/login']);
            }
        
    }

    addUser() {
        this.registerService.addUser(this.currentUser);
    }

    updateUser() {
        this.registerService.updateUser(this.currentUser);
    }
}