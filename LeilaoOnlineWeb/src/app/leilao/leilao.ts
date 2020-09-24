export interface Leilao{
    id: number;
    nome: string;
    valorInicial: number;
    idcItemUsado: boolean;
    responsavelPeloLeilao: string;
    dataAbertura: Date;
    dataFinalizacao: Date;
    segredo: string;
}