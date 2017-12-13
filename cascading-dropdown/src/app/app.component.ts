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
  result;
  node =
    {
      'name': 'root',
      'childNode': 'Continents',
      'children':
        [
          {
            'name': 'Asia',
            'selected' : true,
            'childNode': 'Country',
            'children': [
              {
                'name': 'India',
                'childNode': 'State',
                'children': [
                  {
                    'childNode': 'City',
                    'name': 'MH',
                    'selected' : true,
                    'children': [
                      {
                        'childNode': null,
                        'name': 'Pune',
                        'children': null
                      }
                    ]
                  },
                  {
                    'childNode': 'City',
                    'name': 'MP',
                    'children': [
                      {
                        'childNode': null,
                        'name': 'Bhopal',
                        'children': null
                      },
                      {
                        'childNode': null,
                        'selected' : true,
                        'name': 'Indore',
                        'children': null
                      },
                      {
                        'childNode': null,
                        'name': 'Gwalior',
                        'children': null
                      }
                    ]
                  }
                ]
              },
              {
                'childNode': null,
                'name': 'Nepal',
                'children': null,
                'selected' : true,
              }

            ]
          },
          {
            'childNode': 'Country',
            'name': 'America',
            'children': [
              {
                'childNode': '',
                'name': 'Chicago',
                'children': null
              },
              {
                'childNode': '',
                'name': 'Data',
                'selected' : true,
                'children': null
              },
              {
                'childNode': '',
                'name': 'New york',
                'children': null
              }
            ]
          }
        ]
    };

  constructor(private _cascadeService: CascadeService) { }

  handleEmitter = (value) => {

    this.result = value;
  }
}
