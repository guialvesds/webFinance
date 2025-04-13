import { Component, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { RouterModule } from '@angular/router'; // Importação necessária para routerLink

@Component({
  selector: 'sidebar-item',
  imports: [RouterModule], 
  templateUrl: './sidebar-item.component.html',
})

export class SidebarItemComponent {
  @Input() title: string = ''; 
  @Input() routerLink: string = ''; 

  constructor(private dashboard: DashboardService) {}

  currentRoute() {
    return this.dashboard.currentRoute;
  }

  sidebarOpen() {
    return this.dashboard.sidebarOpen;
  }
}