import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LandingComponent } from './landing/landind.component';
import { LeilaoCadastroComponent } from './leilao-cadastro/leilao-cadastro.component';
import { LeilaoComponent } from './leilao/leilao.component';

const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'Leilao', component: LeilaoComponent},
    {path: 'Cadastrar', component: LeilaoCadastroComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}