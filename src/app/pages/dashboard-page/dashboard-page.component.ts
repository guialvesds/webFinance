import { Component } from '@angular/core';
import { LayoutComponent } from "../../dashboard/layout/layout.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [LayoutComponent, RouterModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
