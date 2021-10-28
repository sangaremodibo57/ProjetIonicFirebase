import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';


  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });

  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Veillez Remplire l\'Email svp' },
      { type: 'pattern', message: 'Entrez un email Valid svp.' }
    ],
    'password': [
      { type: 'required', message: 'Veillez Remplire le password svp' },
      { type: 'minlength', message: 'Le Mots de passe doit contenir au moins 5 caractère' }
    ]
  };

  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('tabs/tabs/tab1');
        
      }, err => {
        this.errorMessage = err.message;
      })
  }
  PasBad(){
    this.navCtrl.navigateForward('/password-oublie');
  }
  goToRegisterPage() {
    this.navCtrl.navigateForward('/registre');
  }

}
