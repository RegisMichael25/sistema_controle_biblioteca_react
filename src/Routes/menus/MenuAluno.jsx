import React, { useState } from "react";
import EditarAluno from "../aluno-funcoes/EditarAluno";
import RemoverAluno from "../aluno-funcoes/RemoverAluno";
import ButtonCadastroAlunos from "../botoes/ButtonCadastroAlunos";

const MenuAluno = () => 
    {
    const [ escolhaMenuAluno, setEscolhaMenuAluno ] = useState(null);

    const renderizarEscolhaMenuAluno = () =>
        {
    
            switch(escolhaMenuAluno)
            {
                case "adicionarAlunos":
                    return <ButtonCadastroAlunos />
                case "editarAlunos":
                    return <EditarAluno />
                case "removerAlunos":
                    return <RemoverAluno />
                default:
                    return;
            }
        }

        return (
                <div className="flex flex-col items-center gap-[20px]">
                    <div>
                    {escolhaMenuAluno === null && (
                        <>
                            <h1 className=""> Alunos </h1>
                                <button className="border rounded-md" onClick={ () => setEscolhaMenuAluno('adicionarAlunos') } > Adicionar Aluno </button>
                                <button className="border rounded-md" onClick={ () => setEscolhaMenuAluno('editarAlunos') } > Editar Aluno </button>
                                <button className="border rounded-md" onClick={ () => setEscolhaMenuAluno('removerAlunos') } > Remover Aluno </button>
                        </>
                    )}
                    {
                        escolhaMenuAluno !== null && (
                            <>                     
                                { renderizarEscolhaMenuAluno() }
                            </>
                        )
                    }

                    </div>
                </div>
    )};

export default MenuAluno;