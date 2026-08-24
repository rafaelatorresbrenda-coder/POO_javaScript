// Enum
export const Genero = Object.freeze({
    M: "M",
    F: "F",
    OUTRO: "Outro"
})

// classe
export class Usuario{
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
    // metodo construtor
    constructor(id, nome,senha,dataNascimento,genero){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero= genero;
        this.isAdmin = false;
    }
    // metodos de classe --> função
    perfil(){
        return "Nome: " + this.nome + " --- Data de Nacimento: " + this.dataNascimento.toString();
    }
}
/*
const user1 =new Usuario(1, "Adriana Torres","ABC123","2002-05-05T00:00:00",Genero.F)
const user2 =new Usuario(2, "Tom Souza","AB3","2010-11-02:00:00",Genero.M)
console.log(user1)
user1.nome = "Adriana Alves"
console.log(user1)
console.log(user1.perfil())
console.log(user2.perfil())
*/