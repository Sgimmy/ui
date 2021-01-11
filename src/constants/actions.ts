export enum Actions {
  //user action
  userPressedRetry = 'USER_PRESSED_RETRY',
  userPressedModalOpenAddArticleAction = 'USER_PRESSED_MODAL_OPEN_ADD_ARTICLE',
  userPressedModalCloseAddArticleAction = 'USER_PRESSED_MODAL_OPEN_ADD_ARTICLE',
  userPressedSendArticleAction = 'USER_PRESSED_SEND_ARTICLE',

  storeProfile = 'STORE_PROFILE',
  storeProfileFailed = 'STORE_PROFILE_FAILED',
  retrieveProfile = 'RETRIEVE_PROFILE',
  clearStoreArticleDetail = 'CLEAR_STORE_ARTICLE_DETAIL',
  openModalAddArticle = 'OPEN_MODAL_ADD_ARTICLE',
  closeModalAddArticle = 'CLOSE_MODAL_ADD_ARTICLE',
}
