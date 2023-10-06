import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasService } from '../../notas.service';
import { Nota } from '../../notas/nota';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {

    constructor (
    private router: Router,
    private service: NotasService,
    private route: ActivatedRoute
    ) {}

    notas: Nota = {
      id: 0,
      titulo: "",
      conteudo: "",
      tipo: "",
    }

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((nota) => {
        this.notas = nota
      })
    }

    cancelar(){
      this.router.navigate(['/main'])
    }

    excluirNota() {
      if(this.notas.id) {
        this.service.excluir(this.notas.id).subscribe(() =>{
          this.router.navigate(['/main'])
        })
      }
    }
  }
