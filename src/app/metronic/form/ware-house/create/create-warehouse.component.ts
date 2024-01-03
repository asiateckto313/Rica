import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WareHouse } from '../../../../models/ware-house.model';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, RouterModule
  ],
  templateUrl: "./create-warehouse.component.html",
  styleUrl: '../../../../../bootstrap/scss/bootstrap.scss'
})
export class CreateWareHouseComponent  implements OnInit{

    wareHouseColRef: any = AngularFirestoreCollection<WareHouse>

    private db: any = getFirestore()
    private dbPath = 'user';

    form: any = FormGroup

    constructor(
      private formBuilder: FormBuilder,
      ) {
        this.wareHouseColRef = collection(this.db,this.dbPath);

      }
  
    ngOnInit(): void {
    //   this.buildForm();
    }

    async createWareHouse(event: Event): Promise< any > {
        event.preventDefault();
        if (this.form.status == "VALID") {
    
        }
      }

}
