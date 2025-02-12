import React, { useState } from "react";
import ButtonCadastroLivros from "../botoes/ButtonCadastroLivros";


const MenuLivro = () => 
{

    const [ escolhaMenuLivro, setEscolhaMenuLivro ] = useState(null);

    const renderizarEscolhaMenuLivro = () => 
    {

        switch(escolhaMenuLivro)
        {

            case "adicionarLivro":
                return <ButtonCadastroLivros />
            case "editarLivro":
                return <ButtonEditarLivros />
            case "RemoverLivro":
                return <ButtonRemoverLivros />
            default:
                return;
        }

    }

    return(

        <div>
            <div>
                {  escolhaMenuLivro === null && (
                    <>
                        <h1> Livros </h1>
                            <button onClick={() => setEscolhaMenuLivro('adicionarLivro')}>Adicionar</button>
                            <button>Editar</button>
                            <button>Remover</button>
                    </>
                )}
                {
                    escolhaMenuLivro !== null && (
                        <> 
                            { renderizarEscolhaMenuLivro() }
                        </>
                    )
                }
            </div>
        </div>

    );

}

export default MenuLivro;