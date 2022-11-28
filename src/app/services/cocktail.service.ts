import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  getRamdonDrink() {
    return this.http.get(`${this.apiUrl}/random.php`);
  }

  search(query: string) {
    return this.http.get(`${this.apiUrl}/search.php?s=${query}`);
  }
}
