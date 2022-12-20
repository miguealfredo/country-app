import { Component } from '@angular/core';
import { CountryInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
})
export class CapitalComponent {
  notFound: boolean = false;
  countriesList: CountryInterface[] = [];

  constructor(private paisService: PaisService) {}

  search(nameCountry: string) {
    this.notFound = false;
    this.paisService.searchCapital(nameCountry).subscribe(
      countries => {
        if (countries.length > 0) this.countriesList = countries;
        else this.notFound = true;
      },
      err => {
        console.log('Error');
        console.info(err);
        this.notFound = true;
        this.countriesList = [];
      }
    );
  }

  suggestions(nameCountry: string) {}
}
