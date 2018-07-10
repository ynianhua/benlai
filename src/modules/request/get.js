import axios from 'axios'

const Get = ({url, data}) => {
    return axios.get('/benlai'+url, {
        params: data
    })
}

export default Get