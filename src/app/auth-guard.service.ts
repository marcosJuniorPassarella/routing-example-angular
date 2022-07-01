import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService
      .isAuthentificated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(["/"]);
        }
      });
  }
}
