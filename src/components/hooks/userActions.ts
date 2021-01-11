import { useDispatch } from 'react-redux';
import {
  userPressedModalCloseAddArticleAction,
  userPressedModalOpenAddArticleAction,
  userPressedSendArticleAction,
} from '../../store/actions/user.action';
import { SendArticle } from '../../constants/types';

export const useUserActions: () => {
  openModalAddArticle: () => void;
  closeModalAddArticle: () => void;
  sendArticle: (article: SendArticle) => void;
} = () => {
  const dispatch = useDispatch();

  const openModalAddArticle = () =>
    dispatch(userPressedModalOpenAddArticleAction);
  const closeModalAddArticle = () =>
    dispatch(userPressedModalCloseAddArticleAction);
  const sendArticle = (article: SendArticle) =>
    dispatch(userPressedSendArticleAction(article));

  return {
    openModalAddArticle,
    sendArticle,
    closeModalAddArticle,
  };
};
