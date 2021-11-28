import { useEffect, useState } from "react"
import validador from "../util/validador"

const Validacion = () => {
    const [valor, setValor] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log("use efect")
        document.title = `texto ${valor}`
    })

    const actualizarValor = (ev) => {
        console.log(ev)
        setValor(ev.target.value)
        setError(validador(ev.target.value))
    }

    return (
        <div>
            <input value={valor} onChange={actualizarValor} />
            {error ? <p>error en campo</p> : ''}
        </div>
    )

}

export default Validacion