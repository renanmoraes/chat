import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable'
import { AppModule } from '../app/app.module';
import { Chat } from '../models/chat';


@Injectable()
export class EnviarMensagem {
  private url: string = AppModule.getUrl() + "/salvarMensagem";
  private url_get: string = AppModule.getUrl() + "/mensagens";
  constructor(private http: Http) {}

  todasMensagens(){
    return this.http.get(this.url_get)
      .do(this.logResponde)
      .map(this.extractData);
  }

  fnEnviarMensagem(chat: Chat){
   let body = new URLSearchParams();
    body.append('nome', chat.nome.toString());
    body.append('msg', chat.menssagem.toString());
    body.append('hr', chat.dtHora.toString());

    return this.http.post(this.url, body)
    .do(this.logResponde)
    .map(this.extractData);
    //.catch(this.catchError);
  }

  private catchError(error: Response | any){
    //console.log(error);
    return Observable.throw(error.json().error || "Erro de conexão");
  }

  private logResponde(res: Response){
    //console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }
}
