import { Component, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { SidebarHeaderComponent } from "../sidebar-header/sidebar-header.component";
import { SidebarItemsComponent } from "../sidebar-items/sidebar-items.component";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [SidebarHeaderComponent, SidebarItemsComponent],
})
export class SidebarComponent {
  @Input() mobileOrientation: 'start' | 'end';
  styles: {
    start: string;
    end: string;
  };
  constructor(private dashboard: DashboardService) {
    this.mobileOrientation = 'end';
    this.styles = {
      start: 'left-0',
      end: 'right-0 lg:left-0',
    };
  }

  sidebarOpen() {
    return this.dashboard.sidebarOpen;
  }
}
