import { useState } from "react";

const Registro = () => {

    const [registros, setRegistros] = useState([])

    const enviar = (ev) => {
        ev.preventDefault();

        let actual = registros;

        actual.push({
            "nombre": ev.target.nombre.value,
            "apellido": ev.target.apellido.value,
            "documento": ev.target.documento.value,
            "edad": ev.target.edad.value
        })

        console.log(actual)

        setRegistros(actual)
    }

    return (

        <div>

            <form onSubmit={enviar}>
                <label>Nombre:</label><input type="text" name='nombre' /> <br />
                <label>Apellido:</label><input type="text" name='apellido' /> <br />
                <label>Documento:</label><input type="text" name='documento' /> <br />
                <label>Edad:</label><input type="text" name='edad' /> <br />

                <button type="submit">Enviar</button>
            </form>


        </div>

    )

}

export default Registro