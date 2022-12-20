import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-search-field',
  templateUrl: './country-search-field.component.html',
  styleUrls: ['./country-search-field.component.css'],
})
export class CountrySearchFieldComponent implements OnInit {
  @Input() placeholder:string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();


  debounce: Subject<string> = new Subject();
  nameCountry: string = '';

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(valor => this.onDebounce.emit(valor));
  }
  search() {
    this.onEnter.emit(this.nameCountry);
    this.debounce;
  }
  keyPress() {
    this.debounce.next(this.nameCountry);
  }
}
