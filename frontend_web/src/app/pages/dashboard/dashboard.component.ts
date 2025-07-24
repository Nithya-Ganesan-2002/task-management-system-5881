import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="dashboard-page">
      <h2>Welcome to your dashboard!</h2>
      <div class="dashboard-summary">
        <p>This is your overview. (Summary stats and quick links will appear here.)</p>
      </div>
    </section>
  `
})
export class DashboardComponent {}
