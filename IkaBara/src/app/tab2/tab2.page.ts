import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public userUid; 
  public userEmail;
  public userNom;
  public userPrenom;
  deconnect:boolean;


  constructor(
    private navCtrl: NavController,
    private navCtr: NavController,
    private authService: AuthenticationService,
    private afdb: AngularFireDatabase,
    private Auth:AngularFireAuth

  ) {}

  ngOnInit() {

    this.Auth.authState.subscribe(auth=>{
      if (!auth) {
        this.deconnect=true;
      } else {
        this.deconnect=false;
        
      }
    })

    this.authService.userDetails().subscribe(res => {
     
      if (res !== null) {
        this.userUid = res.uid;
        console.log(this.userUid);
        
        this.afdb.list('user/'+ this.userUid).valueChanges().subscribe(detailsUser=>{
          this.userPrenom = detailsUser[3];
          this.userNom = detailsUser[1];
          this.userEmail = detailsUser[0];
          console.log(detailsUser);
          
        })

      } else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      console.log('err', err);
    })

  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }


}
