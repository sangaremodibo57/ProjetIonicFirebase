import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  itemsCollect: AngularFirestoreCollection;
  public items;
  constructor( private fire: AngularFireDatabase) {}

  ngOnInit(){

    this.fire.list('user').valueChanges().subscribe(donnees=>{
      console.log(donnees);
      
      this.items=donnees;

    })

  }

}
