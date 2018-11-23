import {
  DATASET_SEARCH_UPDATE,
  DATASET_SEARCH_LOADING
} from '../../actions/datasetSearch'

export default function (state = { loading: false, result: {count: 0, limit: 20, results: []}}, action) {
  switch (action.type) {
    case DATASET_SEARCH_UPDATE:
      return {...state, ...action.data }
    case DATASET_SEARCH_LOADING:
      return {...state, ...action.data }
    default:
      return state
  }
}