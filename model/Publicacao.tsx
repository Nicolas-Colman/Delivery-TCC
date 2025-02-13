export class Publicacao {
    public id       : string;
    public descricao: string;
    public valor    : string;
    public userId   : string;
    public urlFoto  : string;


    constructor(obj?: Partial<Publicacao>){
        if(obj){
            this.id         = obj.id
            this.descricao  = obj.descricao
            this.valor      = obj.valor
            this.userId     = obj.userId
            this.urlFoto    = obj.urlFoto
        }
    }

    toString(){
        const objeto=`{
            "id"            :   "${this.id}",
            "descricao"     :   "${this.descricao}",
            "valor"         :   "${this.valor}",
            "userId"        :   "${this.userId}",
            "urlFoto"       :   "${this.urlFoto}",
        }`
        return objeto
    }

    toFirestore(){
        const publicacao={
            id          : this.id,
            descricao   : this.descricao,
            valor       : this.valor,
            userId      : this.userId,
            urlFoto     : this.urlFoto,
        }
        return publicacao
    }

}
