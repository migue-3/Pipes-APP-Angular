import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Migue';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Karla';
    this.gender = 'female'
  }

  // i18Plural
  public clients: string[] = ['Jose','Margarita','Esteban','Karime','Wanda','Sandra','Fernando','Julio','Oscar','Yuly','Eduardo','Mica'];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  };

  deleteClient():void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Migue',
    age: 27,
    address: 'Buenos aires, Argentina'
  };

  // Async Pipe
  public myObservableTimer = interval(2000)

}
