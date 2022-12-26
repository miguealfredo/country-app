import { Component } from '@angular/core';
import { CountryInterface } from '../../interfaces/pais.interface';
import { regionBlock } from '../../interfaces/region.interfaces';
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent {
  regions: regionBlock [] = [
{key:'Africa', name: 'Africa'},
{key:'Americas', name: 'Americas'},
{key:'Asia', name: 'Asia'},
{key:'Europe', name: 'Europe'},
{key:'Oceania', name: 'Oceania'},
];
  activeRegion: string = '';
  regionsList: CountryInterface[] = [];
  notFound: boolean = false;

  constructor(
    private paisService:PaisService
  ){}

  getClassCSS(region:string):string{
    return (region === this.activeRegion) ? 'btn-secondary' : 'btn btn-outline-secondary';
  }

  activateRegion( region:regionBlock ){
    this.notFound = false;

    this.activeRegion = region.name;
    this.paisService.searchRegion(region.key).subscribe(
      countries => {
        console.log(countries);
        if (countries.length > 0) this.regionsList = countries;
        else this.notFound = true;
      },
      err => {
        console.log('Error');
        console.info(err);
        this.notFound = true;
        this.regionsList = [];
      }
    )
    
  }
}
