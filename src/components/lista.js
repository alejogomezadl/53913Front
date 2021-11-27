import { Component } from "react";


class Lista extends Component {

    constructor(props) {
        
        super(props)
        console.log("Constructor")
    }


   componentWillMount(){
        console.log("componentWillMount")


    }

    componentDidMount(){
        console.log("componentDidMount")
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
                                        elem.mostrar ?
                                            <p> valor: {elem.valor} </p>
                                            : <p> valor:  **********</p>
                                    }
                                    <p> fecha: {elem.fecha}</p>
                                </li>
                            )
                        })
                    }
                </ul>



            </div>
        )
    }


}


export default Lista