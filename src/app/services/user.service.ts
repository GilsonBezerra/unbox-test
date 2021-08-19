import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { User } from '../models/user';
import { map, delay, catchError, findIndex } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseURL = environment.endPoint;

  constructor(private http: HttpClient) {}


  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`)
      .pipe(
        map(res => res['results']))
  }
 
   
}
