import {
  LOCALE_SET,
  LOCALE_LOADING
} from '../actions/locale'

export default function (state = { locale: 'en', loading: false }, action) {
  switch (action.type) {
    case LOCALE_SET:
      return {...state, ...action.locale }
    case LOCALE_LOADING:
      return {...state, loading: action.locale.loading }
    default:
      return state
  }
}