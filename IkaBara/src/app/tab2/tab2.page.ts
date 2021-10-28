import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  userEmail: string;
  userNom: string;
  userPrenom: string;


  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private afdb: AngularFireDatabase

  ) {}

  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
     
      if (res !== null) {
        this.userEmail = res.email;
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
