export enum Actions {
  //user action
  userPressedRetry = 'USER_PRESSED_RETRY',
  userPressedSendArticleAction = 'USER_PRESSED_SEND_ARTICLE',

  //popup message
  showPopupMessage = 'SHOW_POPUP_MESSAGE',
  hidePopupMessage = 'HIDE_POPUP_MESSAGE',

  changeFormAddArticle = 'CHANGE_FORM_ADD_ARTICLE',

  storeProfile = 'STORE_PROFILE',
  storeProfileFailed = 'STORE_PROFILE_FAILED',
  retrieveProfile = 'RETRIEVE_PROFILE',
  clearStoreArticleDetail = 'CLEAR_STORE_ARTICLE_DETAIL',
}
