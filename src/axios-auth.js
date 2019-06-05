import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejstest-72551.firebaseio.com'
})

instance.defaults.headers.common['SOMEHEADER'] = 'someheader'

export default instance