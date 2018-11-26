import { searchDatasets } from '../api/datasetSearch';
export const DATASET_SEARCH_UPDATE = 'DATASET_SEARCH_UPDATE'
export const DATASET_SEARCH_LOADING = 'DATASET_SEARCH_LOADING'

export const setDatasetResults = data => ({
  type: DATASET_SEARCH_UPDATE,
  data: {
    ...data,
    loading: false
  }
})

export const loadingDatasetResults = loading => ({
  type: DATASET_SEARCH_LOADING,
  data: { loading }
})

export const updateDatasetSearch = query => async (dispatch, getState) => {
  dispatch(loadingDatasetResults(true))
  const currentState = getState().datasetSearch;
  const result = (await searchDatasets({ q: currentState.q, limit: currentState.result.limit, offset: currentState.result.offset, ...query }))
  dispatch(setDatasetResults({ result, ...query }))
}