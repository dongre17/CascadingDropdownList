import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { IDropdown } from '../interfaces/IDropdown';
import * as _ from 'lodash';
import { CascadeService } from '../cascade.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges {

  @Input('label') public label;
  @Input('node') public node;
  @Output() retVal = new EventEmitter();

  public data = [];
  selectedValue = undefined;
  constructor(private _cascadeService: CascadeService) { }

  ngOnInit() {
    this.selectedValue = _.first(this.node['children']);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['node']) {
      const res = _.find(this.node['children'], function (item) {
        return (_.has(item, 'selected') && item.selected === true);
      });

      this.selectedValue = res ? res : _.first(this.node['children']);
      this._cascadeService.result[this.label] = (this.selectedValue.name);
      this._cascadeService.result = this.removeJsonProperties(this._cascadeService.result);
      this.retVal.emit(this._cascadeService.result);
    }
  }

  updateValue = () => {
    this._cascadeService.result[this.label] = (this.selectedValue.name);
    this._cascadeService.result = this.removeJsonProperties(this._cascadeService.result);
    this.retVal.emit(this._cascadeService.result);
  }

  removeJsonProperties = (values) => {
    const retVal = values;
    let isValid = false;
    Object.keys(retVal).forEach((key) => {
      if (key === this.label) {
        isValid = true;
      } else if (isValid) {
        delete retVal[key];
      }
    });
    return retVal;
  }

}
