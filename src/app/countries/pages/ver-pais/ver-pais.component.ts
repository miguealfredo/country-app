import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  country!: CountryInterface
  /**
   * 
   * @param activatedRoute para suscrivirnos a cualquier cambio de la url
   */
  constructor( 
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService,
    ){}

  ngOnInit(): void {
    /*
    this.activatedRoute.params
    .subscribe(
      ({code}) => {
        this.paisService.getCountryByCode(code)
        .subscribe(pais =>  console.log(pais))
      }
    )
    */
   this.activatedRoute.params
   .pipe(
     switchMap( ({code}) => this.paisService.getCountryByCode(code) ),
     tap( console.log )
     )
     .subscribe(country => this.country = country[0])
  }
}
