import axios from "axios"

export function login(username: string, password: string) {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/auth/login',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            username,
            password
          }
    })
}
interface RegisterInfo {
    username: string | undefined;
    password: string | undefined;
    adress: string | undefined;
    adress_detail: string | undefined;
  }
  

export function register(info: RegisterInfo) {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/auth/register',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          data: info
    })   
}