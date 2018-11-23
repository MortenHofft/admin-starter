import { searchDeletedDatasets } from '../api/datasetSearch';
export const DATASET_DELETED_UPDATE = 'DATASET_DELETED_UPDATE'
export const DATASET_DELETED_LOADING = 'DATASET_DELETED_LOADING'

export const setDatasetResults = data => ({
  type: DATASET_DELETED_UPDATE,
  data: {
    ...data,
    loading: false
  }
})

export const loadingDatasetResults = loading => ({
  type: DATASET_DELETED_LOADING,
  data: { loading }
})

export const updateDatasetSearch = query => async (dispatch, getState) => {
  dispatch(loadingDatasetResults(true))
  const currentState = getState().datasetSearch;
  const result = (await searchDeletedDatasets({ limit: currentState.result.limit, offset: currentState.result.offset, ...query })).data
  dispatch(setDatasetResults({ result, ...query }))
}