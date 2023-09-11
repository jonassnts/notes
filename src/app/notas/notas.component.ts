import { Component, Input } from '@angular/core';
import { Notas } from '../notas';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class notasComponent {
@Input() notas:Nota = {
  id: 0,
  titulo: "AAAAA",
  conteudo: "TESTE",
  tipo: "tipo1"
}
tamanhoNota(): string {
  if(this.notas.conteudo.length >= 150){
    return 'nota-g'
  }
  return 'nota-p'
}

}
