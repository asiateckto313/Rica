import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country"
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environment/environment';
import { initializeApp } from "firebase/app";

import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, FlexLayoutModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, RouterModule,MatSelectCountryModule, 
    HttpClientModule, MatSelectModule,

    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    AngularFirestore,
    AngularFireModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'beautifulLogin';

  firebase : any 
  matSelectCountry : any

  

  ngOnInit(): void {
    console.log("🚀 ~ file: app.component.ts:46 ~ AppComponent ~ ngOnInit ~ ngOnInit:")
    // Initialize Firebase
        let app =null
        let analytics = null;
        isSupported().then((result) => {
            console.log("🚀 ~ file: app.component.ts:52 ~ AppComponent ~ isSupported ~ result:", result)
            if (result) {
                console.log("🚀 ~ file: app.component.ts:51 ~ AppComponent ~ isSupported ~ result:", result)
                app = initializeApp(environment.firebase);
                analytics = getAnalytics(app);
                logEvent(analytics, 'page_view')
            }
        })
        .catch(err => {
            
            console.log("🚀 ~ file: app.component.ts:67 ~ AppComponent ~ ngOnInit ~ err:", err)
        })

        
    // this.firebase = AngularFireModule.initializeApp(environment.firebase)

    this.matSelectCountry = MatSelectCountryModule.forRoot('fr')
  }
  
 
}
