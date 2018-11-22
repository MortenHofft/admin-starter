import { combineReducers } from 'redux'
import locale from './locale'
import datasetSearch from './datasetSearch'

export default combineReducers({
  locale,
  datasetSearch
})