// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.apiUrl;
  private tokenKey = 'auth_token';
  private _isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string, fio: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }

  register(userInfo: { email: string, password: string, fio: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/registration`, userInfo);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn = false;
  }

  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token: string | null) {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      localStorage.removeItem(this.tokenKey);
    }
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user`);
  }

  // Геттер для получения значения флага залогиненности
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  // Сеттер для установки значения флага залогиненности
  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
