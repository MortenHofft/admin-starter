import axios from 'axios'

export const searchDatasets = function({q}) {
  return axios.get(`http://api.gbif.org/v1/dataset/search?q=${q})`)
}