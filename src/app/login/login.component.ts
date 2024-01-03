import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { where } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, FlexLayoutModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    styleImage = "rain"
    state: any = {}
    passVisibility = false
    passType = "password"
    badgeIndex = 1
    userColRef: any = AngularFirestoreCollection<User>

    private db: any = getFirestore()
    private dbPath = 'user';
  
    form: any = FormGroup
    constructor(
      private formBuilder: FormBuilder,
      ) {
        this.userColRef = collection(this.db,this.dbPath);

      }
  
    ngOnInit(): void {
      this.buildForm();
    }
  
    handleChange(event:any = undefined) {
      console.log("🚀 ~ file: app.component.ts:34 ~ AppComponent ~ handleChange ~ event:", event)
      let { target : { name, value } } = event ?? {}
      console.log("🚀 ~ file: app.component.ts:39 ~ AppComponent ~ handleChange ~ value:", value)
      console.log("🚀 ~ file: app.component.ts:39 ~ AppComponent ~ handleChange ~ name:", name)
  
      if( name && value ) {
  
          this.state[ name ] = value
      }
      
    }
  
    private buildForm(): any {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
          });
    }
  
    toggleBadgeIndex( index:number = 1) {
      this.badgeIndex = index
      console.log("🚀 ~ file: app.component.ts:60 ~ AppComponent ~ toggleBadgeIndex ~ this.badgeIndex:", this.badgeIndex)
    }
  
    toggleVisibilty() {
      this.passVisibility = ! this.passVisibility
      this.passType = this.passVisibility ? "text" : "password"
    }
  
    unsplashClass(): any {
      return {
        'min-height': '100%',

        background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage}) no-repeat center center`,
        'background-size': 'cover',
        position: 'relative',
      };
    }
  
    async login(event: Event): Promise< any > {
      event.preventDefault();
      if (this.form.status == "VALID") {
          const value = this.form.value;
         let test = query( this.userColRef, where( "email", "==", value.email ) )
         const querySnapshot = await getDocs( test )
         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let userFound: any = doc.data()
            if( userFound?.password === value.password ) {
                alert("Redirection en cours...")
                setTimeout(() => {
                    window.location.href= '/warehouse/list'
                    
                }, 3000);
            } else {
                alert("Identifiants incorrects")
            }
            console.log(doc.id, " => ", doc.data());
          });
         
  
      }
    }
  

}