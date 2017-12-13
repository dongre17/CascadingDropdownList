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
    this.selectedValue = this.selectDefaultValue(this.node['children']);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['node']) {
      this.selectedValue = this.selectDefaultValue(this.node['children']);
      this.updateValue();
    }
  }

  selectDefaultValue = (value) => {
    const retVal = _.find(value, function (item) {
      return (_.has(item, 'selected') && item.selected === true);
    });
    return retVal ? retVal : _.first(value);
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
