import Livros from "../../classes/Livros";

let biblioteca = [];

function ButtonCadastroLivros({ onClick }) {
    function onClick(e) {
        e.preventDefault();
        
        biblioteca.push(new Livros(document.getElementById('titulo').value, document.getElementById('autor').value));
        
        for(let i = 0; i < biblioteca.length; i++){
            console.log(biblioteca[i]);
        }
    }
    
  return (
    <div>
      <h1 className="text-xl font-medium">Cadastro de livros</h1>
          <form>
              <label htmlFor="titulo">Titulo: </label>
              <input className="outline-none border-b-1 mb-2" id="titulo" name="titulo" type="text" /> <br />
              <label htmlFor="autor">Autor: </label>
              <input className="outline-none border-b-1 mb-2" id="autor"name="autor" type="text" />

          </form>
      <button onClick={onClick} className="button-cadastro border-1 rounded-md p-2 w-30 bg-blue-500 text-white">
        Cadastrar 
      </button>
    </div>
    );
}


export default ButtonCadastroLivros;