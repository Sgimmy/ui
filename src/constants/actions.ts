export enum Actions {
  //user action
  userPressedRetry = 'USER_PRESSED_RETRY',
  userPressedSendArticleAction = 'USER_PRESSED_SEND_ARTICLE',

  //popup message
  showPopupMessage = 'SHOW_POPUP_MESSAGE',
  hidePopupMessage = 'HIDE_POPUP_MESSAGE',

  //login
  pressedLogin = 'PRESSED_LOGIN',
  userAuthenticated = 'USER_AUTHENTICATED',
  userNotAuthenticated = 'USER_NOT_AUTHENTICATED',

  clearStateReduxSendArticle = 'CLEAR_STATE_REDUX_SEND_ARTICLE',
  selectedTag = 'SELECTED_TAG',

  storeProfile = 'STORE_PROFILE',
  storeProfileFailed = 'STORE_PROFILE_FAILED',
  retrieveProfile = 'RETRIEVE_PROFILE',
  clearStoreArticleDetail = 'CLEAR_STORE_ARTICLE_DETAIL',
}
