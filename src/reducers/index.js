import { combineReducers } from 'redux'
import locale from './locale'
import dataset from './dataset'

export default combineReducers({
  locale,
  ...dataset
})