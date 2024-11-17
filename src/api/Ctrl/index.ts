import axios from "axios"

export function moveCtrl(dir: string, status: string) {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/ctrl/control',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,

          },
          data: {
            dir,
            status
          }
    })
}

export function fallCtrl(userId: string) {
    return axios({
        url: process.env.REACT_APP_DOMAIN + '/ctrl/control',
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,

          },
          data: {
            userId,
            dir: 'fall'
          }
    })
}

