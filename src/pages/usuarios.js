
import { useState } from 'react'
import { getUsuarios, setUsuarios } from '../api/Api'
const Usuarios = () => {


    const [usuarios, setUsuario] = useState([])
    const [resultado, setResultado] = useState('')


    const setService = () => {
        let body = { "monto": 2000, "tipo": "ingreso", "categoría": "sueldo", "fecha": "10/01/2015" }
        setUsuarios(body).then(
            (resp) => {
                console.log(resp);
              setResultado(resp.data)
            }
        )
    }

    const getService = () => {


        getUsuarios(5).then((resp) => {
            let result = resp.data.results;
            setUsuario(result)
        })

    }

    return (

        <div>
            <p>{resultado}</p>
            <ul>
                {
                    usuarios.map(ele => {
                        return (
                            <li>nombre:{ele.name.first} genero :{ele.gender}
                            </li>
                        )
                    }
                    )
                }
            </ul>
            <button onClick={getService}>Invocar</button>

            <button onClick={setService}>enviar</button>
        </div>
    )

}
export default Usuarios;