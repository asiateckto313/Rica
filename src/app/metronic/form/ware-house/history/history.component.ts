import { Component, OnInit } from '@angular/core';
import { MenuItemList } from '../../../../menu-item-list/menu-list.component';
import { CommonModule } from '@angular/common';
import {Country} from '@angular-material-extensions/select-country';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { WareHouseService } from '../../../../services/ware-house.service';
import { Observable } from 'rxjs';
import { WareHouse } from '../../../../models/ware-house.model';


@Component({
  selector: 'app-history-ware-house',
  standalone: true,
  imports: [ MenuItemList, CommonModule, FormsModule, 
    MatSelectCountryModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,MatIconModule
  ],
  providers: [
  ],
  templateUrl: "./history.component.html",
  styleUrl: '../../../metronic.style.scss'
})
export class HistoryWarehouse implements OnInit{
    badgeIndex = 1
    warehouses: any = Array<WareHouse>
    loading = false

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
        private wareServ: WareHouseService
    ) {}
    
    fetchWareHouses() {
        this.loading = true

        this.warehouses = this.wareServ.getAll()
        console.log("🚀 ~ file: history.component.ts:65 ~ HistoryWarehouse ~ ngOnInit ~ warehouses:", this.warehouses)
        this.warehouses
        .then( (snapShot: any) => {
            let tmp:any  = []
            console.log("🚀 ~ file: ware-house.service.ts:23 ~ WareHouseService ~ .then ~ snapShot:", snapShot.docs)
            snapShot.forEach( (doc: any) => {
                tmp.push(Object.assign({
                    id: doc.id
                },doc.data()))
            })
            console.log("🚀 ~ file: ware-house.service.ts:24 ~ WareHouseService ~ .then ~ tmp:", tmp)
            this.warehouses = tmp
            this.loading = false
            
        })
    }
    
    ngOnInit(): void {
        this.buildForm()
        this.fetchWareHouses()
        
    }
   
   edit( warehouse: any, readOnly = false ) {
    console.log("🚀 ~ file: history.component.ts:74 ~ HistoryWarehouse ~ edit ~ warehouse:", warehouse)


    if( typeof window !== "undefined" ) {
        localStorage.setItem('ware', JSON.stringify(warehouse) )
        localStorage.setItem('readOnly', `${readOnly}`)
    }
    
    setTimeout(() => {
        window.location.href = '/warehouse/update'
            
    }, 4000);
   }

   deleteW( warehouse: any ) {
    this.wareServ.delete( warehouse )
    .then( ( obj ) => {
        this.fetchWareHouses()
    })
    console.log("🚀 ~ file: history.component.ts:81 ~ HistoryWarehouse ~ deleteW ~ warehouse:", warehouse)
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
