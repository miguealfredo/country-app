import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountrySearchFieldComponent } from './components/country-search-field/country-search-field.component';

@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    CountryTableComponent,
    CountrySearchFieldComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CapitalComponent, PaisComponent, RegionComponent, VerPaisComponent],
})
export class CountriesModule {}
