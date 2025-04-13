import { Component } from '@angular/core';
import { SidebarItemComponent } from "../sidebar-item/sidebar-item.component";
import { HomeIconComponent } from "../../icons/home-icon/home-icon.component";
import { BillIconComponent } from "../../icons/bill-icon/bill-icon.component";
import { DocIconComponent } from "../../icons/doc-icon/doc-icon.component";

@Component({
  selector: 'sidebar-items',
  templateUrl: './sidebar-items.component.html',
  imports: [SidebarItemComponent, HomeIconComponent, BillIconComponent, DocIconComponent]
})
export class SidebarItemsComponent {

}
