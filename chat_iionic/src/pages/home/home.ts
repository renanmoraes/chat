import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chat } from '../../models/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chat = {} as Chat;

  constructor(public navCtrl: NavController) {

  }

  teste(chat: Chat){
    alert(chat.menssage);
    chat.menssage = "";
  }

}
