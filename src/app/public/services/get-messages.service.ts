import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetMessagesService implements Resolve<Observable<any>> {

  constructor(private http: HttpClient) { }

  resolve() {
    return this.http.get('https://run.mocky.io/v3/9c9334e6-9c41-4825-ab01-d3d45dc8b5c1');
  }
}
