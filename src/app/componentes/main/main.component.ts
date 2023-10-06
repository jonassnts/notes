import { Component } from '@angular/core';
import { Nota } from 'src/app/componentes/notas/nota';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor (private service: NotasService) { }

  listaNotas:Nota[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe((listaNotas) => {
      this.listaNotas = listaNotas
    })
  }
}



