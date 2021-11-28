const axios = require("axios");


const getUsuarios = (val) => {

    return axios.get("https://randomuser.me/api?results="+ val)
}

const setUsuarios = (body) => {

    return axios.post("http://localhost:3000/finanzas/gastos"
    ,body
    )
}

module.exports = { getUsuarios,setUsuarios }