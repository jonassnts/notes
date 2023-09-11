import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
