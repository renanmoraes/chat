import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EnviarMensagem } from '../providers/enviarmenssagem';
import { Response } from '../models/response';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EnviarMensagem,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  // LINK SERVIDOR FOMEDEMAIS
  private static url: string = "http://localhost:3000";
  private static data = new Date();

  static getUrl(){
    return this.url;
  }

  static getData(){
    // Guarda cada pedaço em uma variável
    var dia     = this.data.getDate();           // 1-31
    var dia_sem = this.data.getDay();            // 0-6 (zero=domingo)
    var mes     = this.data.getMonth();          // 0-11 (zero=janeiro)
    var ano4    = this.data.getFullYear();       // 4 dígitos
    var hora    = this.data.getHours();          // 0-23
    var min     = this.data.getMinutes();        // 0-59
    var seg     = this.data.getSeconds();        // 0-59
    var mseg    = this.data.getMilliseconds();   // 0-999
    var tz      = this.data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = ((dia.toString().length == 1)? '0'+dia : dia) + '/' + (((mes+1).toString().length == 1)? '0'+(mes+1) : (mes+1)) + '/' + ano4;
    var str_hora = hora + ':' + ((min.toString().length == 1)? '0'+min : min) + ':' + seg;

    var data = new Date();
    var dias = new Array(
      'domingo','segunda','terça','quarta','quinta','sexta','sábado'
    );

    //Exemplo de utilização
    //dias[data.getDay()];

    return str_data +" "+ str_hora;
  }
}
