import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {

  

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'L\'e-mail est requis.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Mot de passe requis.' },
      { type: 'minlength', message: 'Le mot de passe doit comporter au moins 5 caractères.' }
    ]
  };
  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private aft: AngularFireDatabase
   

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      prenom: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      nom: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });


  }

  

  tryRegister(value) {
    console.log(value)
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.aft.object('user/' + res.user.uid).set({
          prenom: value.prenom,
          nom: value.nom,
          email: value.email,
          password: value.password,

        })
        this.successMessage = "Votre compte a été créé. Veuillez vous connecter.";
        this.navCtrl.navigateBack('tabs/tabs/tab1');
      }, err => {
        console.log(err);
        this.errorMessage = "Firebase : L'adresse e-mail est mal formatée. (auth/invalid-email).";
        this.successMessage = "";
      })
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }

}
