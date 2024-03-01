import Titulo from "./Titulo"

function App()
{
  return(
  <div>
    <Titulo cor="pink" imagem={true} />
    <Titulo cor="red" />
    <Titulo cor="blue" />
    <Titulo cor="green" imagem={true} />
  </div>)
}

export default App
