import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: Array<any>) {
    return this.http.post('https://udemy-ng-http-96827.firebaseio.com/data.json', servers);
  }

}
