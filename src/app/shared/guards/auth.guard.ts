import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// interfaces
import { Role } from '../interfaces/account/account';

// service
import { RootService } from '../services/root.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private root: RootService,
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthorized()) {
      this.router.navigate([this.root.login()]);
      return false;
    }

    const roles = route.data.roles as Role[];

    if (roles && !roles.some(r => this.authService.hasRole(r))) {
      this.router.navigate([this.root.notFound()]);
      return false;
    }
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthorized()) {
      return false;
    }

    const roles = route.data && route.data.roles as Role[];

    if (roles && !roles.some(r => this.authService.hasRole(r))) {
      return false;
    }

    return true;
  }
}
