import { searchDatasets } from '../api/datasetSearch';

export const DATASET_SEARCH_UPDATE = 'DATASET_SEARCH_UPDATE'
export const DATASET_SEARCH_LOADING = 'DATASET_SEARCH_LOADING'

export const setDatasetResults = ({result}) => ({
    type: DATASET_SEARCH_UPDATE,
    result,
    loading: false
})

export const loadingDatasetResults = loading => ({
  type: DATASET_SEARCH_LOADING,
  loading: loading
})

export const updateDatasetSearch = query => async (dispatch, getState) => {
    dispatch(loadingDatasetResults(true))
    const result = (await searchDatasets({q: query})).data
    dispatch(setDatasetResults({result}))
}