import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Manager';

  // Use Angular router at runtime via RouterModule (for routing and routerLinkActiveOptions).
  // No need to keep 'private router: Router' if not used directly.

  // PUBLIC_INTERFACE
  getSectionTitle(): string {
    // Since we need this method to function, add a fallback so code works
    // in SSR and CSR; if Router service is needed, inject via a method parameter (not as member).
    // For now, always return "Dashboard".
    return 'Dashboard';
  }
}
