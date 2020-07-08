import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  path = '';

  constructor() { }

  home(): string { return this.path; }
  notFound(): string { return `${this.path}/not-found`; }
  login(): string { return `${this.path}/account/login`; }
}
