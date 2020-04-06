import axios from 'axios'

const api_url = 'https://newsapi.org/v2/'
const apiKey  = '435df1bbad4d4735a99da05274e08730'

export const getNews = (trend, props) => {
    return axios.get(`${api_url}${trend}`, {
        params: {
            ...props
        },
        headers: {
            'X-Api-Key': apiKey
        }
    })
        .then(res => res.data.articles)
        .catch(err => console.error(err))
}
