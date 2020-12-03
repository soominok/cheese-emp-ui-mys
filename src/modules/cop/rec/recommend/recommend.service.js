import axios from 'axios'
import { context as c } from '../../../context'


export const recommendService = {
    getRecommend
};

async function getRecommend(recommends) {
    const req = {
        method: c.get,
        url: `${c.url}/api/recommend/${recommends}`,
    }
    const resp = await axios(req)

    const data = resp.data

    alert(' connection is successful !')
    return data
}
