import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  public authorization(value: {username: string, password: string}): Observable<object> {
    console.log(value);
    return this.httpClient.post('randomUrl', {});
  }
}
