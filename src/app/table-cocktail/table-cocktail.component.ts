import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-table-cocktail',
  templateUrl: './table-cocktail.component.html',
  styleUrls: ['./table-cocktail.component.css'],
})
export class TableCocktailComponent implements OnInit {
  public drinks: any[] = [];
  searchField = new FormControl();
  public results: any;

  constructor(private _cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.getDrinks();
    this.searchField.valueChanges
      .pipe(debounceTime(3000))
      .subscribe((value) => {
        this.getData(value);
      });
  }

  private getData(query: string) {
    this._cocktailService.search(query).subscribe((data: any) => {
      this.drinks = data.drinks;
    });
  }

  getDrinks() {
    this._cocktailService.getRamdonDrink().subscribe((res: any) => {
      this.drinks = res.drinks;
    });
  }
}
