import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  template: `
    <section class="tasks-list-page">
      <div class="tasks-list-header">
        <h2>Tasks</h2>
        <a routerLink="/task/new" class="btn-primary">+ New Task</a>
      </div>
      <form class="tasks-search-filter">
        <input type="search" placeholder="Search tasks..." />
        <select>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button type="submit" class="btn-outline">Filter</button>
      </form>
      <div class="tasks-list">
        <!-- Minimal static placeholder; real tasks would come from backend or service -->
        <div class="task-card">
          <div class="task-title">Your first task!</div>
          <div class="task-desc">This is a dummy task; filter/search and actual CRUD will be wired up.</div>
          <div class="task-meta">
            <span class="task-status">Incomplete</span>
            <div class="task-actions">
              <a routerLink="/task/1" class="btn-sm">Edit</a>
              <button class="btn-sm btn-danger" (click)="deleteTask(1)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tasks-list-page { max-width: 850px; margin: 2rem auto; }
    .tasks-list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    .btn-primary { background: var(--primary); color: #fff; border: none; border-radius: 6px; padding: 0.5rem 1.1rem; font-weight: 600; text-decoration: none;}
    .btn-primary:hover { filter:brightness(1.07);}
    .tasks-search-filter { display: flex; gap: 0.9rem; margin-bottom: 2.5rem; }
    .tasks-search-filter input, .tasks-search-filter select { padding: 0.5em 0.7em; border-radius: 5px; border: 1px solid #ececec;}
    .btn-outline { background: #fff; border: 1px solid var(--primary); color: var(--primary); padding: 0.45rem 1.0rem; border-radius: 5px; font-weight: 550; cursor:pointer;}
    .btn-outline:hover { background: var(--sidebar-accent);}
    .tasks-list { display: flex; flex-direction: column; gap: 1.1rem;}
    .task-card { background: var(--card-bg); border: 1px solid #f0f0f1; border-radius: 10px; padding: 1.3rem 1.1rem 1rem 1.1rem; box-shadow: 0 1px 9px #f0f2ff21;}
    .task-title { font-weight: 600; font-size: 1.05em;}
    .task-meta { display: flex; justify-content: space-between; align-items: center; margin-top: 9px;}
    .task-status { color: var(--secondary); font-size: 0.99em;}
    .task-actions { display: flex; gap: .7rem;}
    .btn-sm { padding: 0.32rem 0.7rem; border-radius: 5px; border:none; background: var(--accent); color: #fff; font-size: 0.98em;}
    .btn-sm:hover { filter:brightness(1.14);}
    .btn-danger { background: #ff4b4b;}
  `]
})
export class TasksListComponent {
  // PUBLIC_INTERFACE
  deleteTask(id: number) {
    // TODO: Connect to service for deletion
    console.log(`Would delete task with id ${id} (demo, not wired)`);
  }
}
