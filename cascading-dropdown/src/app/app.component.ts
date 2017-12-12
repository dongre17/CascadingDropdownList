import { Component } from '@angular/core';
import { DropdownComponent } from '../app/dropdown/dropdown.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  node =
    {
      'name': 'root',
      'childNode': 'Continents',
      'children':
        [
          {
            'childNode': 'Country',
            'name': 'Asia',
            'children': [
              {
                'childNode': 'State',
                'name': 'India',
                'children': [
                  {
                    'childNode': 'City',
                    'name': 'MH',
                    'children': [
                      {
                        'childNode': null,
                        'name': 'Pune',
                        'children': null
                      }
                    ]
                  },
                  {
                    'title': 'City',
                    'name': 'MP',
                    'children': [
                      {
                        'childNode': null,
                        'name': 'Bhopal',
                        'children': null
                      },
                      {
                        'childNode': null,
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
                'name': 'Chicago',
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

}
