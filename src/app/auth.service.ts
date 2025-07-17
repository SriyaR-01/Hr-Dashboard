import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'isLoggedIn';
  private readonly EXPIRES_AT_KEY = 'expiresAt';

  private readonly SESSION_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours

  public login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem(this.TOKEN_KEY, 'true');
      const expiresAt = Date.now() + this.SESSION_DURATION_MS;
      localStorage.setItem(this.EXPIRES_AT_KEY, expiresAt.toString());
      return true;
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.EXPIRES_AT_KEY);
  }

  public isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem(this.TOKEN_KEY) === 'true';
    const expiresAt = parseInt(
      localStorage.getItem(this.EXPIRES_AT_KEY) || '0',
      10
    );

    if (!loggedIn || Date.now() > expiresAt) {
      this.logout();
      return false;
    }
    return true;
  }
}
