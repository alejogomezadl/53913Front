import { useState } from "react"

function Saludo({nombre,apellido}) {

  const [mensaje , setMensaje] = useState('Bienvenido')
  const [finalizado , setFinalizado] = useState('que estes bien')

    return (
      <div>
        <p>{mensaje} {nombre} {apellido}  {finalizado}</p>
        <button onClick={()=>setMensaje("Adios")}> Despedida</button>
      </div>
    )
  }

  export default Saludo