import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemsCollect: AngularFirestoreCollection;
  public items;
  constructor( private fire: AngularFireDatabase ) {}


  ngOnInit(){

    this.fire.list('user').valueChanges().subscribe(donnees=>{

      this.items=donnees;

    })

  }

  

}
