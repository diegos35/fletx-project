import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableCocktailComponent } from './table-cocktail/table-cocktail.component';

const routes: Routes = [
  {
    path: 'details',
    component: HomeComponent,
  },
  {
    path: 'table-cocktail',
    component: TableCocktailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
