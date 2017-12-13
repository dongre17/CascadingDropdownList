import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CascadeService {
  public result = {};


  constructor(private http: Http) { }


  public getJSON(): Observable<any> {
    return this.http.get('assets/cascading.json')
      .map((res: any) => res.json());
  }
}
