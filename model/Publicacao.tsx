export class Publicacao {
    public id       : string;
    public descricao: string;
    public valor    : string;

    constructor(obj?: Partial<Publicacao>){
        if(obj){
            this.id = obj.id
            this.descricao = obj.descricao
            this.valor = obj.valor
        }
    }

    toString(){
        const objeto=`{
            "id"    :   "${this.id}",
            "descricao"    :   "${this.descricao}",
            "valor"    :   "${this.valor}",
        }`
        return objeto
    }

    toFireStore(){
        const publicacao={
            id  : this.id,
            descricao  : this.descricao,
            valor  : this.valor
        }
    }

}
