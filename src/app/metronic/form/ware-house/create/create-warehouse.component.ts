import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WareHouse } from '../../../../models/ware-house.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { NgbdModalBasic } from '../../../../bootstrap/components/modal/modal.component';
import { WareHouseService } from '../../../../services/ware-house.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, RouterModule,
    NgbdModalBasic
  ],
  providers:[
    
    AngularFirestore
  ],
  templateUrl: "./create-warehouse.component.html",
  styleUrl: '../../../../metronic/metronic.style.scss'
})
export class CreateWareHouseComponent  implements OnInit{
    state: any = {}
    badgeIndex = 1
    disabled = true

    wareHouseColRef: any = AngularFirestoreCollection<WareHouse>

    private db: any = getFirestore()
    private dbPath = '/warehouse';

    form: any = FormGroup

    constructor(
      private formBuilder: FormBuilder,
      private warehouseServ: WareHouseService
      ) {
        this.wareHouseColRef = collection(this.db,this.dbPath);

      }
  
    ngOnInit(): void {
    //   this.buildForm();
    }

    toggleBadgeIndex( index:number = 1) {
        alert()
        this.badgeIndex = index
    }

    handleChange(event:any = undefined) {
        console.log("🚀 ~ file: app.component.ts:34 ~ AppComponent ~ handleChange ~ event:", event)
        let { target : { name, value } } = event ?? {}
        console.log("🚀 ~ file: app.component.ts:39 ~ AppComponent ~ handleChange ~ value:", value)
        console.log("🚀 ~ file: app.component.ts:39 ~ AppComponent ~ handleChange ~ name:", name)
    
        if( name && value ) {
            if( `${ value }`.length ) this.state[ name ] = value
            else  this.state[ name ] = undefined

            this.disabled = Object.keys( this.state ).length < 5
        }
        
      }

    redirectHistory() {
        window.location.href = "/warehouse/list"
    }

    createWareHouse(event: Event) {
        event.preventDefault();
        if( ! this.state?.created_at ) this.state.created_at = new Date()
        console.log("🚀 ~ file: create-warehouse.component.ts:75 ~ CreateWareHouseComponent ~ createWareHouse ~ this.state :", this.state )
    
        // this.warehouseServ.update( "VNVAoTWcF1RORegwVMCG", this.state )
        // this.warehouseServ.delete( "VNVAoTWcF1RORegwVMCG" )
        this.warehouseServ.create( this.state )
        .then( (doc: any) => {
            console.log("🚀 ~ file: create-warehouse.component.ts:77 ~ CreateWareHouseComponent ~ .then ~ doc:", doc)
            
        }).catch( error => {
            console.log("🚀 ~ file: create-warehouse.component.ts:85 ~ CreateWareHouseComponent ~ .then ~ error:", error)
            
        })
        /* if (this.form.status == "VALID") {
    
        } */
      }

}
