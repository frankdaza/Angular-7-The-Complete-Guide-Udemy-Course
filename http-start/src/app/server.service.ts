import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  storeServers(servers: Array<any>): Observable<any> {
    return this.http.post('https://udemy-ng-http-96827.firebaseio.com/data.json', 
      servers, { headers: this.headers });
  }

  getServers(): Observable<any> {
    return this.http.get('https://udemy-ng-http-96827.firebaseio.com/data.json');
  }

}
