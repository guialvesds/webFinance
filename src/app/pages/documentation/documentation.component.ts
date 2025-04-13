import { Component } from '@angular/core';
import { DocComponent } from "../../components/docs/doc/doc.component";

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
  imports: [DocComponent]
})
export class DocumentationComponent {

}
