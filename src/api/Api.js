const axios = require("axios");


const getUsuarios = (val) => {

    return axios.get("https://randomuser.me/api?results="+ val)
}

const setUsuarios = (body) => {

    return axios.post("https://misiontic2022upb.vercel.app/api/personal-finance/operations"
    ,body
    )
}


module.exports = { getUsuarios,setUsuarios }