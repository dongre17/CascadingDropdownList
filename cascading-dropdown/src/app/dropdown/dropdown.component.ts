import { Component, OnInit, Input } from '@angular/core';
import { IDropdown } from '../interfaces/IDropdown';
import * as _ from 'lodash';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  //  @Input('values') public values: IDropdown = undefined;

  @Input() selectedValue = undefined;
  @Input('node') public node;

  constructor() { }

  ngOnInit() {
  }

}
