import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  storeServers(servers: Array<any>) {
    return this.http.post('https://udemy-ng-http-96827.firebaseio.com/data.json', 
      servers, { headers: this.headers });
  }

}
