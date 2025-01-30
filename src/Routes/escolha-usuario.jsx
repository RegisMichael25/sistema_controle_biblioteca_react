import React, { useState } from "react";
import MenuLivro from "./menus/menu-livro";
import MenuAluno from "./menus/menu-aluno";

const EscolhaUsuario = () => 
{
    const [escolha, setEscolha] = useState(null);
    
    const renderizarEscolha = () =>
    {
        switch(escolha)
        {
            case "alunos":
                return <MenuAluno/>
                
            case "livros":
                return <MenuLivro /> 
                
            default:
                return;
        }
    }

    return (
        // Truque de renederização condicional
        <div className="flex flex-col items-center gap-[20px]"> 
            {escolha === null && (
                <>

                    <button className="font-semibold text-2xl" onClick={() => setEscolha('alunos')}> Menu Alunos <i className="bi bi-person-add"></i></button>
                    <button className="font-semibold text-2xl" onClick={() => setEscolha('livros')}> Menu Livros <i className="bi bi-book"></i></button>

                </>
            )}
            {escolha !== null && (
                <>

                    <button className="font-semibold text-2xl" onClick={() => setEscolha(null)}> Voltar </button>
                    {renderizarEscolha()}
                    
                </>
            )}
        </div>
    );
}

export default EscolhaUsuario;