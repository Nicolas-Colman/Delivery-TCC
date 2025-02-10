export class Publicacao {
    public id       : string;
    public descricao: string;

    constructor(obj?: Partial<Publicacao>){
        if(obj){
            this.id         = obj.id
            this.descricao  = obj.descricao
        }
    }

    toString(){
        const objeto=`{
            "id"            :   "${this.id}",
            "descricao"     :   "${this.descricao}",
        }`
        return objeto
    }

    toFirestore(){
        const publicacao={
            id          : this.id,
            descricao   : this.descricao,
        }
        return publicacao
    }

}
