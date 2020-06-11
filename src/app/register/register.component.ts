import { AuthentificationService } from 'src/services/authentification/authentification.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/modals/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  // form Group
  registerForm: FormGroup;

  // abstract form controle
  email:AbstractControl;
  password:AbstractControl;

  // interface call
  registerUser:IUser;

  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private authentificationService: AuthentificationService
    ) {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]]
    });

    this.email = this.registerForm.controls.email;
    this.password = this.registerForm.controls.password;
   }

  ngOnInit(): void {
  }

  onSubmit(){

    this.registerUser = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }

    this.authentificationService.onRegister(this.registerUser)
      .then(responseAuthentification => {
        console.log(responseAuthentification);
      }).catch(error => {
        console.log(error);
      });
  }

}
