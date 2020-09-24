import { DatePipe } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Leilao } from './leilao';

const API = 'https://localhost:44349'
/*
/api/Leilaos/;
*/

@Injectable({providedIn: 'root'}) //Disponibiliar para a aplicação inteira esse serviço.
export class LeilaoService{

    constructor(private http: HttpClient, private datepipe: DatePipe){}

    listLeilao(){
        return this.http
        .get<Leilao[]>(API + '/api/Leilaos/');

    };

    createLeilao(data: Leilao){
        return this.http
        .post(API + '/api/Leilaos', data);
    }
}