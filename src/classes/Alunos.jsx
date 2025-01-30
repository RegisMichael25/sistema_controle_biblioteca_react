class Alunos{
    constructor(aluno, serie){
        this.aluno = aluno;
        this.serie = serie;
    }

    setTitulo(aluno){
        this.aluno = aluno;
    }

    getTitulo(){
        return this.aluno;
    }

    setAutor(serie){
        this.serie = serie;
    }

    getAutor(){
        return this.serie;
    }
}

export default Alunos;