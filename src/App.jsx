import './App.css'
import EscolhaUsuario from './Routes/aluno-funcoes/EscolhaUsuario'


function App() {
  return (
  <>
    <div className='w-auto h-screen bg-gray-100'> 
      <header className='flex justify-start items-center pl-[20px] h-20 bg-gray-800 text-white text-4xl'>
        <i class="bi bi-person-circle"></i>
      </header>
      <div className='w-full h-30 flex justify-center items-center'>
        <h1 className="font-bold text-3xl">Escolha Uma opção</h1>
      </div>
      <div className='w-full flex justify-center items-center h-[50%] bg-gray-500'>
          <EscolhaUsuario />
      </div>

    </div>
  </>
  )
}

export default App;
