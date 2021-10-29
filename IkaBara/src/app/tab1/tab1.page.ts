import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemsCollect: AngularFirestoreCollection;
  public items;
   deconnect:boolean;
  constructor( private fire: AngularFireDatabase,
    private Auth: AngularFireAuth
    ) {}


  ngOnInit(){

    this.Auth.authState.subscribe(auth=>{
      if (!auth) {
       this.deconnect=true;
        
      } else {
        this.deconnect=false;
        this.fire.list('user').valueChanges().subscribe(donnees=>{

          this.items=donnees;
    
        })
    
      }
    })

   
  }

  

}
