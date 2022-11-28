import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public drink: any;

  constructor(private _cocktailService: CocktailService) {}

  async ngOnInit() {
    await this.fethcDrink();
  }

  fethcDrink() {
    this._cocktailService.getRamdonDrink().subscribe((res: any) => {
      this.drink = res.drinks[0];
      console.log(this.drink);
    });
  }
}
