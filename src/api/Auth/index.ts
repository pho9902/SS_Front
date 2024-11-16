import axios from "axios"

export function login(id: string, password: string) {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/auth/login',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            id,
            password
          }
    })
}
