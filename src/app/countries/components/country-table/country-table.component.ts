import { Component, Input } from '@angular/core';
import { CountryInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent {
  @Input() countriesList: CountryInterface[] = [];

  constructor() {}
}
