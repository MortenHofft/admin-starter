import axios from 'axios'
import qs from 'qs'

export const searchDatasets = function(query) {
  return axios.get(`http://api.gbif.org/v1/dataset?${qs.stringify(query)}`)
}

export const searchDeletedDatasets = function(query) {
  return axios.get(`http://api.gbif.org/v1/dataset/deleted?${qs.stringify(query)}`)
}