import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Leilao } from './leilao';
import { LeilaoService } from './leilao.service';

@Component({
    selector: 'lo-leilao',
    templateUrl: './leilao.component.html',
    styleUrls: ['./leilao.component.css']

})

export class LeilaoComponent implements OnInit{

    itemLeilao: Leilao[] = [];

    constructor(
        private leilaoService: LeilaoService
    ){}

    ngOnInit(): void {
        this.leilaoService.listLeilao().subscribe(x => this.itemLeilao = x);
        // this.leilaoService.listLeilao().subscribe(x => console.log(x));
    }

}
