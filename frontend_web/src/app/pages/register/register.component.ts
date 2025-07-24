import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form class="minimal-form" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <h2>Register</h2>
      <label>
        Username
        <input formControlName="username" type="text" required minlength="3" maxlength="32" autocomplete="username">
      </label>
      <label>
        Email
        <input formControlName="email" type="email" required autocomplete="email">
      </label>
      <label>
        Password
        <input formControlName="password" type="password" required minlength="5" autocomplete="new-password">
      </label>
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
      <div *ngIf="registerError" class="error">{{ registerError }}</div>
    </form>
  `,
  styles: [`
    .minimal-form { max-width: 380px; margin: 3rem auto; display: flex; flex-direction: column; gap: 1.4rem; background: #fff; padding: 2rem 1.5rem; border-radius: 10px; box-shadow: 0 2px 18px #e5e5e5; }
    .minimal-form label { display: flex; flex-direction: column; gap: 0.2rem; font-weight: 600; }
    .minimal-form input { padding: 0.5em; border: 1px solid #ececec; border-radius: 5px; }
    .minimal-form button { background: var(--primary); color: #fff; padding: 0.65em 0; border: none; border-radius: 5px; font-size: 1rem; font-weight: 600; }
    .error { color: var(--accent); font-size: 0.97rem; margin-top: 0.7rem; text-align: center;}
  `]
})
export class RegisterComponent {
  registerForm;
  registerError: string | null = null;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // PUBLIC_INTERFACE
  onSubmit() {
    if (this.registerForm.invalid) return;
    // TODO: Connect to backend for registration!
    if (this.registerForm.value.username !== "demo") {
      this.registerError = '';
      // this.router.navigate(['/login']); // router removed, navigation is no-op now
    } else {
      this.registerError = 'Username "demo" is not allowed in this demo';
    }
  }
}
