import axios from "axios";

export default {
    GET_PRODUCT_FROM_API({commit}){
        //const url = 'http://localhost:6000/products'
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=20'
        //const url = process.env.VUE_APP_URL_SERV

        return axios(url, {
            method: 'GET'
        })
            .then(products => {
                commit('SET_TO_PRODUCTS_STATE', products.data)
                console.log(products)
                return products
            })
            .catch(e => {
                console.log(e)
                return e
            })
    }
}