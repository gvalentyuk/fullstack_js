import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

import {SignInCredentials, SignUpCredentials, User} from "../models/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'http://localhost:5000/api'
  signedIn$ = new BehaviorSubject(false);
  currentUserSubject = new BehaviorSubject(null);
  currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.signedIn$.next(!!localStorage.getItem('currentUser'))
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(credentials: SignInCredentials) {
    return this.http.post<User>(`${this.rootUrl}/user/login`, credentials).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.signedIn$.next(true);
        this.currentUserSubject.next(user);
        return user;
      })
    )
  }

  register(credentials: SignUpCredentials) {
    return this.http.post<User>(`${this.rootUrl}/user/registration`, credentials).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.signedIn$.next(true);
        this.currentUserSubject.next(user);
        return user;
      })
    )
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.signedIn$.next(false);
    this.currentUserSubject.next(null);
  }
}
