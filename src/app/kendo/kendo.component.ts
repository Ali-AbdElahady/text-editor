import { Component } from '@angular/core';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.scss'],
})
export class KendoComponent {
  title = 'your-project-name';
  public value = `<p> The Editor enables users to create rich textual content. </p>`;
  getValue(): void {
    console.log(this.value);
  }
}
