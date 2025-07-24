import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form class="minimal-form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <h2>Login</h2>
      <label>
        Username
        <input formControlName="username" type="text" autocomplete="username" required>
      </label>
      <label>
        Password
        <input formControlName="password" type="password" autocomplete="current-password" required>
      </label>
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
      <div *ngIf="loginError" class="error">{{ loginError }}</div>
    </form>
  `,
  styles: [`
    .minimal-form { max-width: 370px; margin: 3rem auto; display: flex; flex-direction: column; gap: 1.4rem; background: #fff; padding: 2rem 1.5rem; border-radius: 10px; box-shadow: 0 2px 18px #e5e5e5; }
    .minimal-form label { display: flex; flex-direction: column; gap: 0.2rem; font-weight: 600; }
    .minimal-form input { padding: 0.5em; border: 1px solid #ececec; border-radius: 5px; }
    .minimal-form button { background: var(--primary); color: #fff; padding: 0.65em 0; border: none; border-radius: 5px; font-size: 1rem; font-weight: 600; }
    .error { color: var(--accent); font-size: 0.97rem; margin-top: 0.7rem; text-align: center;}
  `]
})
export class LoginComponent {
  loginForm;
  loginError: string | null = null;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // PUBLIC_INTERFACE
  onSubmit() {
    if (this.loginForm.invalid) return;
    // TODO: Connect to backend for authentication!
    const { username, password } = this.loginForm.value;
    if (username === "demo" && password === "demo") {
      this.loginError = '';
      // this.router.navigate(['/']);  // router is removed, navigation is no-op now
    } else {
      this.loginError = 'Invalid username or password (demo: demo/demo)';
    }
  }
}
