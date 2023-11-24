import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://www.virustotal.com',

})



export default class API {
    static async sendMessage(text) {
        // // console.log(topic_num)
        // const resp = await axios.post('/api/v3/urls', {
        //   headers: {
        //     accept: 'application/json',
        //     'content-type': 'application/x-www-form-urlencoded'
        //   }
        //     url: text,
        //     'x-apikey': 'be8462184f71a44f51078d744c984b4fca7ffcf3cb294fd6b39dd6b3e8338fef',
        // })


    }
}
