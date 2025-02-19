export class Usuario {
    public id      : string;
    public nome    : string;
    public cpf     : string;
    public email   : string;
    public senha   : string;
    public repSenha   : string;
    public dataNasc: string;
    public urlFoto : string;

    constructor(obj?: Partial<Usuario>){
        if(obj){
            this.id      = obj.id
            this.nome    = obj.nome
            this.cpf     = obj.cpf
            this.email   = obj.email
            this.senha   = obj.senha
            this.repSenha   = obj.repSenha
            this.dataNasc= obj.dataNasc
            this.urlFoto = obj.urlFoto
        }
    }

    toString(){
        const objeto = `{
            "id"      : "${this.id}",
            "nome"    : "${this.nome}",
            "cpf"     : "${this.cpf}",
            "email"   : "${this.email}",
            "senha"   : "${this.senha}",
            "repSenha"   : "${this.repSenha}",
            "nadaNasc": "${this.dataNasc}",
            "urlFoto" : "${this.urlFoto}",
        }`
        return objeto
    }

    toFirestore(){
            const usuario = {
                id      : this.id,
                nome    : this.nome,
                cpf     : this.cpf,
                email   : this.email,
                senha   : this.senha,
                repSenha   : this.repSenha,
                dataNasc: this.dataNasc,
                urlFoto : this.urlFoto,
            }

            return usuario
    }
    
}