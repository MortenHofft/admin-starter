import qs from "qs";

export const searchDatasets = function(query) {
  return (
    fetch(`http://api.gbif.org/v1/dataset?${qs.stringify(query)}`)
      // return fetch(`http://httpstat.us/500`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
  );
};

export const searchDeletedDatasets = function(query) {
  return fetch(`http://api.gbif.org/v1/dataset/deleted?${qs.stringify(query)}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
};
