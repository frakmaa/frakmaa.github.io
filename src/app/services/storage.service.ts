import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item === null) {
      return null;
    }

    return JSON.parse(item) as T;
  }
}
