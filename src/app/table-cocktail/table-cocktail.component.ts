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
  public ingredients: any[] = [];
  public ingredient: boolean = false;
  public lstCategories: any[] = [];
  public selectCategory = '';

  searchField = new FormControl();
  searchBy = new FormControl();

  public disableCategory: boolean = false;
  public disableOption: boolean = false;

  public results: any;
  public seleccionado = '';
  public showSelect = true;
  //select
  lista: string[] = [
    'search by name',
    'search by first letter',
    'Search ingredient by name',
  ];

  constructor(private _cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.getDrinks();
    this.searchField.valueChanges
      .pipe(debounceTime(3000))
      .subscribe((value) => {
        this.getData(value);
      });
    this.getCategories();
  }

  public getData(query: string) {
    let filter = '';
    if (this.seleccionado === 'search by name') {
      filter = 's';
      this._cocktailService.search(query, filter).subscribe((data: any) => {
        this.drinks = data.drinks;
      });
    }
    if (this.seleccionado === 'search by first letter') {
      filter = 'f';
      this._cocktailService.search(query, filter).subscribe((data: any) => {
        this.drinks = data.drinks;
      });
    }
    if (this.seleccionado === 'Search ingredient by name') {
      this.ingredient = true;
      filter = 'i';
      this._cocktailService.search(query, filter).subscribe((data: any) => {
        this.ingredients = data.ingredients;
      });
    }
  }

  getDrinks() {
    this._cocktailService.getRamdonDrink().subscribe((res: any) => {
      this.drinks = res.drinks;
    });
  }

  getCategories() {
    this._cocktailService.getCategories().subscribe((res: any) => {
      this.lstCategories = res.drinks.map((item: any) => item.strCategory);
    });
  }

  onSelectOption(value: any) {
    if (value === 'selectOption') {
      this.disableCategory = true;
    } else {
      this.disableOption = true;
    }
  }

  SearchCategory() {
    if (this.selectCategory) {
      console.log(this.selectCategory);
      this._cocktailService
        .search(this.selectCategory, 'c')
        .subscribe((data: any) => {
          this.drinks = data.drinks;
        });
    }
  }
}
