import axios from "axios"

let getProducts= ()=>{
    return axios.get('http://localhost:3000/furniture-products.json')
    .then((res)=>res.data)
    .then((finalData)=>finalData.products)
}

export {getProducts}