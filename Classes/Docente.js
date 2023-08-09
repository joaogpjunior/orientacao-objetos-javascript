import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso, nota){
        return `Estudante: ${estudante} aprovado no curso: ${curso} con a nota: ${nota}`;
    }
}