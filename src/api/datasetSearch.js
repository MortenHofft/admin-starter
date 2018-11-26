import qs from "qs";
import setHeaders from './setHeaders'

export const searchDatasets = function(query) {
  return fetch(`http://api.gbif.org/v1/dataset?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const searchDeletedDatasets = function(query) {
  return fetch(`http://api.gbif.org/v1/dataset/deleted?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const getDataset = function(key) {
  return fetch(`http://api.gbif.org/v1/dataset/${key}`, {
    headers: setHeaders()
  })
};
