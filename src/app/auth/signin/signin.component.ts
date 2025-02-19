import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailOrPhoneValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return { required: true };
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phonePattern = /^[0-9]{10}$/;
  if (emailPattern.test(value) || phonePattern.test(value)) {
    return null;
  }
  return { invalidInput: true };
}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  isSentOtp: boolean = false;
  loginForm!: FormGroup;
  formSubmitted = false;
  emailOrPhone!: number | string;

  constructor(
    public dialogRef: MatDialogRef<SigninComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      emailOrPhone: new FormControl('', [
        Validators.required,
        emailOrPhoneValidator,
      ]),
    });
  }

  redirectToSignup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      disableClose: true,
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.invalid) return;
    this.emailOrPhone = this.loginForm.value.emailOrPhone;
    this.isSentOtp = true;
  }
}
