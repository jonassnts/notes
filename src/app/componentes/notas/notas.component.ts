import { Component, Input } from '@angular/core';
import { Nota } from './nota';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
@Input() notas:Nota = {
  id: 0,
  titulo: "",
  conteudo: "",
  tipo: ""
}
tamanhoNota(): string {
  if(this.notas.conteudo.length >= 150){
    return 'nota-g'
  }
  return 'nota-p'
}



}
