import React, { useState } from "react";
import CadastroAlunos from "./cadastro-alunos";
import EditarAluno from "./editar-aluno.jsx/index.js";
import RemoverAluno from "./remover-aluno.jsx";

const MenuAluno = () => 
    {
    const [escolhaMenuAluno, setEscolhaMenuAluno] = useState(null);

    const renderizarEscolhaMenuAluno = () =>
        {
    
            switch(escolhaMenuAluno)
            {
                case "adicionarAlunos":
                    return <CadastroAlunos />
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
                            <h1 className="">Alunos</h1>
                                <button className="border rounded-md" onClick={ () => setEscolhaMenuAluno('adicionarAluno') } > Adicionar Aluno </button>
                                <button className="border rounded-md" onClick={ () => setEscolhaMenuAluno('editarAluno') } > Editar Aluno </button>
                                <button className="border rounded-md" onClick={ () => setEscolhaMenuAluno('removerAluno') } > Remover Aluno </button>
                        </>
                    )}
                    {
                        escolhaMenuAluno !== null && (
                            <>                     
                                {renderizarEscolhaMenuAluno()}
                            </>
                        )
                    }

                    </div>
                </div>
    )};

export default MenuAluno;