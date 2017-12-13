import { Component } from '@angular/core';
import { DropdownComponent } from '../app/dropdown/dropdown.component';
import { CascadeService } from './cascade.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result = {};
  node = undefined;

  constructor(private _cascadeService: CascadeService) {

    this._cascadeService.getJSON().subscribe(data => {
      this.node = data;
    });
  }

  handleEmitter = (value) => {

    this.result = value;
  }
}
