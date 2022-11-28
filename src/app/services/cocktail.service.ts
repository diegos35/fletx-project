import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  getOneDrink(id: string) {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  getRamdonDrink() {
    return this.http.get(`${this.apiUrl}/random.php`);
  }

  search(query: string, filter: string) {
    if (filter === undefined || filter === null) {
      filter = 's';
    }
    let searchword = 'search';
    if (filter === 'c') {
      searchword = 'filter';
      query = query.split(' ').join('_');
    }
    return this.http.get(`${this.apiUrl}/${searchword}.php?${filter}=${query}`);
  }

  getCategories() {
    return this.http.get(`${this.apiUrl}/list.php?c=list`);
  }
}
