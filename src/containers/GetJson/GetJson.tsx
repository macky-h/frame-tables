import Axios from 'axios'

export const GetJson = (event: React.ChangeEvent<HTMLSelectElement>): void => {
  const value = event.currentTarget.value
  Axios.get(`./data/${value}.json`)
    .then(res => {
      console.log(res.data.tech)
    })
}