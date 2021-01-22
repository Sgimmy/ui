import { useDispatch, useSelector } from 'react-redux';
import { SendArticle } from '../../constants/types';
import { sendArticle } from '../../api/sendArticle';
import { sendArticleSelector } from '../../store/selectors/sendArticle.selector';

export const useSendArticle: () => {
  sendArticleAction: (article: SendArticle) => void;
  loading?: boolean;
  clearForm?: boolean;
} = () => {
  const dispatch = useDispatch();

  const sendArticleStore = useSelector(sendArticleSelector);

  const sendArticleAction = (article: SendArticle) =>
    dispatch(sendArticle(article));

  const loading = sendArticleStore.loading;

  const clearForm = sendArticleStore.clearForm;

  return {
    sendArticleAction,
    loading,
    clearForm,
  };
};
