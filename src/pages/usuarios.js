
import { useState } from 'react'
import { getUsuarios, setUsuarios } from '../api/Api'
const Usuarios = () => {


    const [usuarios, setUsuario] = useState([])
    const [resultado, setResultado] = useState('')




    const enviar = (ev) => {
        ev.preventDefault();

        let body = {
            "descripcion": ev.target.descripcion.value,
            "fecha": ev.target.fecha.value,
            "valor": parseInt(ev.target.valor.value),
            "id": parseInt(ev.target.id.value),
        }
        setUsuarios(body).then(
            (resp) => {
                console.log(resp);
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


            <div>

                <form onSubmit={enviar}>
                    <label>descripcion:</label><input type="text" name='descripcion' /> <br />
                    <label>fecha:</label><input type="text" name='fecha' /> <br />
                    <label>valor:</label><input type="text" name='valor' /> <br />
                    <label>id:</label><input type="text" name='id' /> <br />

                    <button type="submit">Enviar</button>
                </form>


            </div>

            <button onClick={getService}>Invocar</button>


        </div>
    )

}
export default Usuarios;