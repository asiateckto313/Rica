import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference, collection, getFirestore } from 'firebase/firestore';
import { User } from '../models/user.model';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, FlexLayoutModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, RouterModule
  ],providers:[
    
    AngularFirestore
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    styleImage = "rain"
    state: any = {}
    passVisibility = false
    passType = "password"
    badgeIndex = 1

    form: any = FormGroup
    constructor(
      private formBuilder: FormBuilder,
      private userServ: UserService
      ) {

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
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
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
        /* LLAMADA RANDOMICA AL SERVICIO DE IMAGENES DE UNSPLASH - CON IMAGENES DE TAMAÑO 1200X900 */
        /*SE LE AÑADE LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA*/
        background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage}) no-repeat center center`,
        'background-size': 'cover',
        position: 'relative',
      };
    }
  
    login(event: Event): any {
      console.log("🚀 ~ file: app.component.ts:59 ~ AppComponent ~ login ~ event:", event)
      console.log("🚀 ~ file: app.component.ts:59 ~ AppComponent ~ login ~ this.form:", this.form.status == "VALID")
      event.preventDefault();
      if (this.form.status == "VALID") {
        const value = this.form.value;
        if( value.confirmPassword === value.password ) {
            this.userServ.create( value )
            .then( (documentReference: DocumentReference ) => {
                alert('Enregistrement effectué, redirection en cours')
                console.log("🚀 ~ file: register.component.ts:101 ~ RegisterComponent ~ .then ~ documentReference:", documentReference)
                setTimeout(() => {
                    
                    window.location.href = '/login'
                }, 3000);

            })
            .catch( ( error: any ) =>  {
                console.log("🚀 ~ file: register.component.ts:105 ~ RegisterComponent ~ login ~ error:", error)

            })
            console.log("🚀 ~ file: register.component.ts:92 ~ RegisterComponent ~ login ~ value:", value)
    
        } else { 
            alert("Les mots de passe ne correspondent pas")
        }
  
      }
    }
  

}