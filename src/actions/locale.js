export const RECEIVE_LOCALE = 'RECEIVE_LOCALE'
export const LOADING_LOCALE = 'LOADING_LOCALE'

export const receiveLocale = conversation => ({
    type: RECEIVE_LOCALE,
    conversation,
})

export const loadingLocale = loading => ({
    type: LOADING_LOCALE,
    loading
})

export const fetchConversation = username => async (dispatch, getState) => {
  dispatch(loadingLocale(true))
}