import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section class="task-form-page">
      <form class="task-form" [formGroup]="taskForm" (ngSubmit)="onSubmit()">
        <h2>{{ editMode ? 'Edit' : 'New' }} Task</h2>
        <label>
          Title
          <input formControlName="title" type="text" required maxlength="150">
        </label>
        <label>
          Description
          <textarea formControlName="description"></textarea>
        </label>
        <label class="checkbox">
          <input formControlName="is_completed" type="checkbox">
          Completed
        </label>
        <button type="submit" [disabled]="taskForm.invalid">{{ editMode ? 'Update' : 'Create' }} Task</button>
      </form>
    </section>
  `,
  styles: [`
    .task-form-page { max-width: 500px; margin: 2.5rem auto; }
    .task-form { display: flex; flex-direction: column; gap: 1.2rem; background: #fff; padding: 2rem 1.5rem; border-radius: 10px; box-shadow: 0 2px 18px #e5e5e5;}
    .task-form label { font-weight: 600; display: flex; flex-direction: column; gap: 0.2rem;}
    .task-form input[type="text"], .task-form textarea { padding: 0.5em; border-radius: 6px; border: 1px solid #ececec;}
    .task-form textarea { min-height: 77px; resize: vertical;}
    .checkbox { flex-direction: row; align-items: center; font-size: 1em; font-weight: 500;}
    .checkbox input[type="checkbox"] { margin-right: 0.5em;}
    .task-form button { background: var(--primary); color: #fff; border:none; border-radius: 6px; font-size: 1em; font-weight: 600; padding: 0.7em 0;}
  `]
})
export class TaskFormComponent {
  editMode = false;

  taskForm;

  constructor(fb: FormBuilder, route: ActivatedRoute) {
    this.taskForm = fb.group({
      title: ['', [Validators.required, Validators.maxLength(150)]],
      description: [''],
      is_completed: [false]
    });

    route.paramMap.subscribe((params) => {
      this.editMode = params.has('id');
    });
  }

  // PUBLIC_INTERFACE
  onSubmit() {
    if (this.taskForm.invalid)
      return;
    // TODO: Connect to backend for create/update
    console.log(`${this.editMode ? 'Update' : 'Create'} task with data: `, this.taskForm.value);
    // navigation is no-op (router removed)
  }
}
