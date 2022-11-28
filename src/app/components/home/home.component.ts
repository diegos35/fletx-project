import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public drink: any;
  public drinkId: string | null = null;

  constructor(
    private _cocktailService: CocktailService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.drinkId = params['id'];
          if (this.drinkId) {
            return this._cocktailService.getOneDrink(this.drinkId);
          }
          return [null];
        })
      )
      .subscribe((data: any) => {
        this.drink = data.drinks[0];
      });
  }

  goToBack() {
    this.location.back();
  }
}
