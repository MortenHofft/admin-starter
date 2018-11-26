import { addError } from './errors'
import { getDataset } from '../api/datasetSearch';
export const DATASET_LOADING = 'DATASET_LOADING'
export const DATASET_LOAD_FAILED = 'DATASET_LOAD_FAILED'
export const DATASET_UPDATED = 'DATASET_UPDATED'

export const loadingDataset = loading => ({
  type: DATASET_LOADING,
  data: {
    loading: loading
  }
})

export const loadingDatasetFailed = error => ({
  type: DATASET_LOAD_FAILED,
  data: { loading: false, error: error }
})

export const setDataset = (dataset) => ({
  type: DATASET_UPDATED,
  data: { loading: false, dataset: dataset }
})

export const loadDataset = key => async (dispatch, getState) => {
  dispatch(loadingDataset(true))
  const response = await getDataset(key)
  if (response.ok) {
    const result = await response.json();
    dispatch(setDataset(result))
  } else {
    dispatch(loadingDatasetFailed(response))
    dispatch(addError(response))
  }
}