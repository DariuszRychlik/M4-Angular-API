import {Injectable, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {

  constructor(private httpClient: HttpClient) {
  }
  public getAPI(): Observable<RootObject>{
    return this.httpClient.get<RootObject>('https://official-joke-api.appspot.com/jokes/general/random');
  }
  public getAPI1(): Observable<RootObject1>{
    return this.httpClient.get<RootObject1>('http://www.boredapi.com/api/activity?price');
  }
}
export interface RootObject {
    id: number;
    type: string;
    setup: string;
    punchline: string;
  }
export interface RootObject1 {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}


