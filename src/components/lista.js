import { Component } from "react";


class Lista extends Component {

    constructor(props) {

        super(props)
        console.log("Constructor")
        this.state = {
            mostrar: true
        }
    }



    componentWillMount() {
        //ciclo montaje antes del render
        console.log("componentWillMount")
    }

    componentDidMount() {
        //ciclo montaje despues del render
        console.log("componentDidMount")
    }


    shouldComponentUpdate(nextProps, nextState) {
        //Funcion del ciclo de vida que controla la actualizacion de mi vista
        console.log('estate ', this.state)
        console.log('shouldComponentUpdate ', nextState)

        return this.state !== nextState
    }

    componentWillUpdate() {
        //ciclo de actualizacion antes de render
        console.log("componentWillUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    ocultarValor() {
        this.setState({
            mostrar: !this.state.mostrar
        })
        console.log(this.state.mostrar)
    }

    render() {
        console.log("render")
        return (
            <div>
                <h2>LISTA {this.props.nombre}</h2>

                <ul>
                    {
                        this.props.operacion.map(elem => {
                            return (
                                <li>
                                    <p> tipo: {elem.tipo} </p>
                                    {
                                        this.state.mostrar ?
                                            <p> valor: {elem.valor} </p>
                                            : <p> valor:  **********</p>
                                    }
                                    <p> fecha: {elem.fecha}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.ocultarValor.bind(this)}>Ocultar</button>
            </div>
        )
    }


}


export default Lista