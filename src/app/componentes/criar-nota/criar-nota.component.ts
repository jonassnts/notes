import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})
export class CriarNotaComponent {

    nota = {
      titulo: "Notas",
      conteudo: "Teste",
      tipo: "tipo1"
    }
}
