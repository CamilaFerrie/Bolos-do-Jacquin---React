export type Produto = {
    nome: string;
    id: number;
    number: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorKg: number;
    ativo: boolean;
    imagem: string;
    categoriasIds: number[]
}