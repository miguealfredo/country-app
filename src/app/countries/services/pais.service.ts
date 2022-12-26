import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CountryInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlApi: string = 'https://restcountries.com/v3.1/';
  private category: string = 'name';
  private region: string = 'region';
  params = new HttpParams().set(
    'fields', 'name,capital,ccn3,flags,population'
  )

  constructor(private http: HttpClient) {}
  /**
   * 
   * @param name 
   * @returns 
   */
  searchContry(name: string): Observable<CountryInterface[]> {
    this.category = 'name';
    const url = `${this.urlApi}/${this.category}/${name}`;
    return this.http.get<CountryInterface[]>(url,{params:this.params});
  }
  /**
   * 
   * @param name 
   * @returns 
   */
  searchCapital(name: string): Observable<CountryInterface[]> {
    this.category = 'capital';
    const url = `${this.urlApi}/${this.category}/${name}`;
    return this.http.get<CountryInterface[]>(url,{params:this.params});
  }
  /**
   * 
   * @param name 
   * @returns 
   */
  getCountryByCode( code: string): Observable<CountryInterface[]> {
    this.category = 'alpha';
    const url = `${this.urlApi}/${this.category}/${code}`;
    return this.http.get<CountryInterface[]>(url);
  }

  searchRegion(region:string): Observable<CountryInterface[]>
  {
    const url = `${this.urlApi}/${this.region}/${region}`;
    return this.http.get<CountryInterface[]>(url,{params:this.params})
  }
}
