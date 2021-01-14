import {Injectable} from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {tap, take, skipWhile} from 'rxjs/operators';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.signedIn$.pipe(
      skipWhile(value => value === null || undefined || false),
      take(1),
      tap(auth => {
        if (!auth) {
          this.router.navigateByUrl('/')
        }
      })
    )
  }
}
