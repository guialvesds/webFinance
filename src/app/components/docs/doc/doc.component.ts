import { Component } from '@angular/core';
import { FolderIconComponent } from "../icons/folder-icon/folder-icon.component";
import { AngularIconComponent } from "../icons/angular-icon/angular-icon.component";
import { SnippetComponent } from "../snippet/snippet.component";

@Component({
  selector: 'doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  imports: [FolderIconComponent, AngularIconComponent, SnippetComponent]
})
export class DocComponent {

}
