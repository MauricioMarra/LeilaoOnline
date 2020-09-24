import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { LeilaoComponent } from './leilao/leilao.component';
import { LandingComponent } from './landing/landind.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LeilaoCadastroComponent } from './leilao-cadastro/leilao-cadastro.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


// import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    LeilaoComponent,
    LandingComponent,
    CabecalhoComponent,
    LeilaoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
