import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchFieldComponent } from './country-search-field.component';

describe('CountrySearchFieldComponent', () => {
  let component: CountrySearchFieldComponent;
  let fixture: ComponentFixture<CountrySearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountrySearchFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountrySearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
