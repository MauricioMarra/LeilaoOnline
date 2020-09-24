import { Component, OnInit } from '@angular/core';
import { Leilao } from '../leilao/leilao';
import { LeilaoService } from '../leilao/leilao.service';


@Component({
    selector: 'lo-leilao-cadastro',
    templateUrl: 'leilao-cadastro.component.html',
    styleUrls: ['./leilao-cadastro.component.css']
})

export class LeilaoCadastroComponent implements OnInit{

    submited = false;

    leilao: Leilao ={
        id: 3,
        nome: '',
        valorInicial: null,
        idcItemUsado: false,
        responsavelPeloLeilao: '',
        dataAbertura: null,
        dataFinalizacao: null,
        segredo: ''
    }
    
    constructor(
        private leilaoService: LeilaoService
    ){}

    ngOnInit() : void{
        //this.leilaoService.createLeilao();
    }
 
    submitForm(){
        console.log(this.leilao);
        this.submited = true;
        this.leilaoService
            .createLeilao(this.leilao)
            .subscribe();
    }
}