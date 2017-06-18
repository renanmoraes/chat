import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chat } from '../../models/chat';
import { AlertController } from 'ionic-angular';
import { AppModule } from '../../app/app.module';
import { EnviarMensagem } from '../../providers/enviarmenssagem';
import { Response } from '../../models/response';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chat = {} as Chat;
  response = [];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private enviarMensagem: EnviarMensagem) {
    this.enviarMensagem.todasMensagens().subscribe(data => {
      console.log(data);
        this.response = data;
    });
  }

  teste(chat: Chat){
    if(chat.menssagem == ""){

    }else{

      let alert = this.alertCtrl.create({
        title: 'Entre com um nome',
        inputs: [
          {
            name: 'nome',
            placeholder: 'Nome'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
              chat.menssagem = "";
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Enviar',
            handler: data => {
              chat.nome = data.nome;
              chat.dtHora = AppModule.getData();
              this.enviar(chat);
            }
          }
        ]
      });
      alert.present();
    }
  }

  enviar(chat: Chat){
    this.enviarMensagem.fnEnviarMensagem(chat).subscribe(data => {
      this.enviarMensagem.todasMensagens().subscribe(data => {
        console.log(data);
          this.response = data;
      });
      chat.menssagem = "";
    });
  }

  showAlert(titulo: String, menssage: String) {
    let alert = this.alertCtrl.create({
      title: ""+ titulo,
      subTitle: "" + menssage,
      buttons: ['OK']
    });
    alert.present();
  }
}
