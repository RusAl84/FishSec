import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:5000',
})

export default class API {
    static async sendMessage(text) {
        // console.log(topic_num)
        const resp = await axios.post(`/s`, {
            text: text,
        })
        return resp.data
    }
}
