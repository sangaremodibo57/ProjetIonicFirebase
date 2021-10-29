import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  itemsCollect: AngularFirestoreCollection;
  public items;
  deconnect:boolean;
  constructor( private fire: AngularFireDatabase,
    private Auth: AngularFireAuth
    ) {}

  ngOnInit(){

    this.Auth.authState.subscribe(auth=>{
      if (!auth) {
       this.deconnect=true
        
      } else {
        this.fire.list('user').valueChanges().subscribe(donnees=>{
          console.log(donnees);
          
          this.items=donnees;
    
        })
      }
    })

   

  }

}
