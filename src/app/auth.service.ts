import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  loggedIn = false;

  isAuthentificated(): Promise<unknown> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
