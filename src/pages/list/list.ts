import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  nome = '';
  assunto = '';
  mensagem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  enviar(){   
    console.log(this.nome);
    console.log(this.assunto);
    console.log(this.mensagem);

    this.showAlert();

  }  

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensagem enviada!',
      subTitle: 'Obrigado por entrar em contato. Responderemos em breve.',
      buttons: ['OK']
    });
    alert.present();
  }
    
}
