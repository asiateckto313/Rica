import { Component, OnInit } from '@angular/core';
import { MenuItemList } from '../../menu-item-list/menu-list.component';
import { CommonModule } from '@angular/common';
import {Country} from '@angular-material-extensions/select-country';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MenuItemList, CommonModule, FormsModule, 
    MatSelectCountryModule, FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  templateUrl: "./dashboard.component.html",
//   templateUrl: "./onlyHeader/only-header.component.html",
  styleUrl: '../metronic.style.scss'
})
export class DashboardComponent implements OnInit{
    badgeIndex = 1

    form:any = FormGroup;
    predefinedCountries: Country[] = [
        {
          name: 'Germany',
          alpha2Code: 'DE',
          alpha3Code: 'DEU',
          numericCode: '276'
        },
        {
          name: 'Greece',
          alpha2Code: 'GR',
          alpha3Code: 'GRC',
          numericCode: '300'
        },
        {
          name: 'France',
          alpha2Code: 'FR',
          alpha3Code: 'FRA',
          numericCode: '250'
        },
        {
          name: 'Belgium',
          alpha2Code: 'BE',
          alpha3Code: 'BEL',
          numericCode: '056'
        },
    ];

    constructor(
        private formBuilder: FormBuilder,
    ) {}
  ngOnInit(): void {
    this.buildForm()
    
   }
   

    private buildForm(): any {
        this.form = this.formBuilder.group({
            country: this.predefinedCountries
         });
    }

    onCountrySelected($event: Country): void {
    console.log("onCountrySelected", $event);
    }
    
    toggleBadgeIndex( index:number = 1) {
        alert()
        this.badgeIndex = index
    }
}
