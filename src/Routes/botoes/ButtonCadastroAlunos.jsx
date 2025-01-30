import { useState, useEffect, useRef } from "react";
import Alunos from "../../classes/Alunos.jsx";

function ButtonCadastroAlunos() {
  const nomeRef = useRef(null);
  const serieRef = useRef(null);
  const [ sala, setSala ] = useState([]);
  
  useEffect(() => {
    const alunosSalvos = JSON.parse(localStorage.getItem('sala')) || [];
    setSala(alunosSalvos);
  });

  function handleClick(e){
    e.preventDefault();

    const nome = nomeRef.current.value;
    const serie = serieRef.current.value;

    if(!nome || !serie){
      alert('Preencha todos os campos'); 
      return;
    }

    const novoAluno = new Alunos(nome, serie);
    const novaSala = [...sala, novoAluno];

    setSala(novaSala);
    localStorage.setItem('sala', JSON.stringify(novaSala));

    console.log(novoAluno);

    nomeRef.current.value = "";
    serieRef.current.value = "";

  }
    
  return (
    <div className="flex flex-col items-center gap-[20px]">
       <h1 className="text-xl font-medium" > Cadastro de alunos </h1>
            <form className='flex flex-col'>
                {/* <label className="block" htmlFor="nome-aluno"> Nome do aluno: </label> */}
                <input ref={nomeRef} className="outline-none border-b-1 mb-2" placeholder="Nome do aluno: " id="nome-aluno" name="nome-aluno" type="text" /> <br />
                {/* <label className="block" htmlFor="serie-aluno"> Serie do aluno: </label> */}
                <input ref={serieRef} className="outline-none border-b-1" placeholder="Serie do aluno: " id="serie-aluno" name="serie-aluno" type="text" />
            </form>
      <button onClick={handleClick} className="m-2 button-cadastro border-1 rounded-md p-2 w-30 bg-blue-500 text-white">
        Cadastrar
      </button>
    </div>
    );
}


export default ButtonCadastroAlunos;