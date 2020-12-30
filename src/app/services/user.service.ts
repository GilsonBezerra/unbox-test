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
  // public userSubject$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {

    // this.userSubject$.next([
    //   {
    //     gender: "",
    //     name: {
    //       title: "",
    //       first: "Gilson",
    //       last: "Bezerra",
    //     },
    //     location: {
    //       street: {
    //         number: null,
    //         name: "",
    //       },
    //       city: "",
    //       state: "",
    //       country: "",
    //       postcode: null,
    //       coordinates: {
    //         latitude: "",
    //         longitude: "",
    //       },
    //       timezone: {
    //         offset: "",
    //         description: "",
    //       }
    //     },
    //     email: "gilson.bezerra@live.com",
    //     login: {
    //       uuid: "",
    //       username: "",
    //       password: "",
    //       salt: "",
    //       md5: "",
    //       sha1: "",
    //       sha256: "",
    //     },
    //     dob: {
    //       date: "",
    //       age: null
    //     },
    //     registered: {
    //       date: "",
    //       age: null
    //     },
    //     phone: "",
    //     cell: "",
    //     id: {
    //       name: "",
    //       value: null
    //     },
    //     picture: {
    //       large: "",
    //       medium: "",
    //       thumbnail: "",
    //     },
    //     nat: ""
    //   },
      
    //   {
            
    //     gender: "",
    //     name: {
    //       title: "",
    //       first: "Larah",
    //       last: "Bezerra",
    //     },
    //     location: {
    //       street: {
    //         number: null,
    //         name: "",
    //       },
    //       city: "",
    //       state: "",
    //       country: "",
    //       postcode: null,
    //       coordinates: {
    //         latitude: "",
    //         longitude: "",
    //       },
    //       timezone: {
    //         offset: "",
    //         description: "",
    //       }
    //     },
    //     email: "gilson.bezerra@live.com",
    //     login: {
    //       uuid: "",
    //       username: "",
    //       password: "",
    //       salt: "",
    //       md5: "",
    //       sha1: "",
    //       sha256: "",
    //     },
    //     dob: {
    //       date: "",
    //       age: null
    //     },
    //     registered: {
    //       date: "",
    //       age: null
    //     },
    //     phone: "",
    //     cell: "",
    //     id: {
    //       name: "",
    //       value: null
    //     },
    //     picture: {
    //       large: "",
    //       medium: "",
    //       thumbnail: "",
    //     },
    //     nat: ""
    //   },
    // ])
        
  }


  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`)
      .pipe(map(res => res['results']))
      // .subscribe(this.userSubject$);
    // return this.userSubject$.asObservable();
  }

  // public getIndex(i: number): Observable<User> {
  //   return this.userSubject$.pipe(
  //     map(users => (i >= 0 && i < users.length) ? users[i] : null)
  //   )
  // }

   
}
