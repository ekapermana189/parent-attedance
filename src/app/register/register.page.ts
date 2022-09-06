import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { toFormData } from '../helper/to-form-data';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  passwordInputType: boolean;
  passwordIcon?: string = 'eye';
  passwordColor: string;

  passwordIconic?: string = 'eye';
  passwordInputTyped: boolean;
  passwordColored: string;

  isSubmitted = false;
  RegisterNewForm: FormGroup = this.formBuilder.group({
    userRoleID: ['2'],
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirmed: ['', [Validators.required, Validators.minLength(6)]],
  },
  {
    validator: this.matchPassword(
      'Password',
      'passwordConfirmed'
    ),
  }
  );

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthenticationService,
    ) { }


    get fc() {
      return this.RegisterNewForm.controls;
    }
  
    get fv() {
      return this.RegisterNewForm.value;
    }

  ngOnInit() {
  }



  showPassword() {
    this.passwordInputType = !this.passwordInputType;

    if (this.passwordIcon === 'eye') {
      this.passwordIcon = 'eye-off';
      this.passwordColor = 'primary';
    } else {
      this.passwordIcon = 'eye';
      this.passwordColor = 'medium';
    }
  }

  
  showPasswordConfirmed() {
    this.passwordInputTyped = !this.passwordInputTyped;

    if (this.passwordIconic === 'eye') {
      this.passwordIconic = 'eye-off';
      this.passwordColored = 'primary';
    } else {
      this.passwordIconic = 'eye';
      this.passwordColored = 'medium';
    }
  }


  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }


  onRegistered(){
    const resultFormData = toFormData(this.fv);
    // console.log(this.fv);.
    this.authService.registerNew(resultFormData).subscribe((res)=>{
    console.log(res);
    
  })
  }
}
