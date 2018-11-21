import {
  LOADING_LOCALE
} from '../actions/locale'

export default function (state = { locale: 'en', loading: false }, action) {
  switch (action.type) {
    case LOADING_LOCALE:
      return {...state, loading: true }
    default:
      return state
  }
}