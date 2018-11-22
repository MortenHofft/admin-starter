import {
  DATASET_SEARCH_UPDATE,
  DATASET_SEARCH_LOADING
} from '../actions/datasetSearch'

export default function (state = { loading: false, result: {count: 0, limit: 20, results: []}}, action) {
  switch (action.type) {
    case DATASET_SEARCH_UPDATE:
      return {...state, loading: action.loading, result: action.result }
    case DATASET_SEARCH_LOADING:
      return {...state, loading: action.loading }
    default:
      return state
  }
}