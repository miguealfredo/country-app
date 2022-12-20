import { Component } from '@angular/core';
import { CountryInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent {
  notFound: boolean = false;
  countriesList: CountryInterface[] = [];

  constructor(private paisService: PaisService) {}

  search(nameCountry: string) {
    this.notFound = false;
    this.paisService.searchContry(nameCountry).subscribe(
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
