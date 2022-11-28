import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCocktailComponent } from './table-cocktail.component';

describe('TableCocktailComponent', () => {
  let component: TableCocktailComponent;
  let fixture: ComponentFixture<TableCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
