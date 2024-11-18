import axios from "axios"

export function getCoin() {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/auth/coin',
        method: 'GET',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,

          },
    })
}

export function addCoin() {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/auth/coin/insert',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
          }, 
    })
}

export function deduCoin() {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/auth/coin/deduct',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
          }, 
    })
} //test 필요


