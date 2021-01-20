import { useDispatch } from 'react-redux';
import { userPressedSendArticleAction } from '../../store/actions/user.action';
import { SendArticle } from '../../constants/types';

export const useUserActions: () => {
  sendArticle: (article: SendArticle) => void;
} = () => {
  const dispatch = useDispatch();

  const sendArticle = (article: SendArticle) =>
    dispatch(userPressedSendArticleAction(article));

  return {
    sendArticle,
  };
};
