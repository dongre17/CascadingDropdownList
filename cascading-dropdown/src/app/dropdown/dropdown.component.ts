import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { IDropdown } from '../interfaces/IDropdown';
import * as _ from 'lodash';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input('values') public values: IDropdown = undefined;

  @Input() node = {
    'name': 'root',
    'type': 'root',
    'children':
      [
        {
          'type': 'Continents',
          'name': 'Asia',
          'children': [
            {
              'type': 'Country',
              'name': 'India',
              'children': [
                {
                  'type': 'State',
                  'name': 'MH',
                  'children': [
                    {
                      'type': 'City',
                      'name': 'Pune',
                      'children': null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
  };
  constructor() { }

  ngOnInit() { }

  iterateValues = (data: IDropdown) => {
    _.forIn(data, function (element, index) {

    });
  }
}
