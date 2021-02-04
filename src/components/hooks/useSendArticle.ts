import { useDispatch, useSelector } from 'react-redux';
import { SendArticle } from '../../constants/types';
import { sendArticle } from '../../api/sendArticle';
import { sendArticleSelector } from '../../store/selectors/sendArticle.selector';
import { clearStateReduxSendArticleAction } from '../../store/actions/sendFormAddArticle.action';
import { useEffect } from 'react';
import { usePopupMessage } from './usePopupMessage';

export const useSendArticle: () => {
  sendArticleAction: (article: SendArticle) => void;
  loading?: boolean;
  clearForm?: boolean;
} = () => {
  const dispatch = useDispatch();

  const { showPopup } = usePopupMessage();

  const sendArticleStore = useSelector(sendArticleSelector);

  const sendArticleAction = (article: SendArticle) =>
    dispatch(sendArticle(article));

  const loading = sendArticleStore.loading;

  useEffect(() => {
    if (sendArticleStore.clearForm) {
      dispatch(clearStateReduxSendArticleAction());
      showPopup('Link inviato con successo');
    }
    if (sendArticleStore.error) {
      showPopup("C'è stato un errore imprevisto");
    }
  }, [sendArticleStore]);

  return {
    sendArticleAction,
    loading,
    clearForm: sendArticleStore.clearForm,
  };
};
