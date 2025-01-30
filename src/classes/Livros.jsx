class Livros{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }

    getTitulo(){
        return this.titulo;
    }

    setAutor(autor){
        this.autor = autor;
    }

    getAutor(){
        return this.autor;
    }
}

export default Livros;