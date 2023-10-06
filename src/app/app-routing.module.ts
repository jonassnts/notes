import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota/excluir-nota.component';

const routes: Routes = [
{
  path: 'main',
  component: MainComponent
},
{
path: 'criar-nota',
  component: CriarNotaComponent
},
{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
},


{
  path: 'excluirNota/:id',
  component: ExcluirNotaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



