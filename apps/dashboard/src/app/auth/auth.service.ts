import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
// Use your exact workspace alias from tsconfig
import { AuthResponseDto } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/auth';

  login(credentials: { email: string; password: string }) {
    return this.http.post<AuthResponseDto>(`${this.API_URL}/login`, credentials).pipe(
      tap((res) => {
        // Requirement: Save token for the authInterceptor to use
        localStorage.setItem('token', res.accessToken);
        // Requirement: Save user info for RBAC/UI visibility
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  logout() {
    localStorage.clear();
  }
}