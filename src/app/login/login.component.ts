import { AuthentificationService } from 'src/services/authentification/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/modals/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form Group
  loginForm: FormGroup;

  // abstract form controle
  email:AbstractControl;
  password:AbstractControl;

  // interface call
  loginUser:IUser;

  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private authentificationService: AuthentificationService
    ) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]]
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
   }

  ngOnInit(): void {
  }

  onSubmit(){

    this.loginUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authentificationService.onLogin(this.loginUser)
      .then(responseAuthentification => {
        this.router.navigate(["crudProduct"]);
      }).catch(error => {
        console.log(error);
      });
  }

}

