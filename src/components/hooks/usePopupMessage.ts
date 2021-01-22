import { useDispatch, useSelector } from 'react-redux';
import {
  hidePopupMessageAction,
  showPopupMessageAction,
} from '../../store/actions/popupMessage.action';
import { popupMessageStoreSelector } from '../../store/selectors/popupMessage.selector';
import { PopupMessage } from '../../store/reducers/popupMessage.reducer';

export const usePopupMessage: () => {
  showPopup: (message: string) => void;
  popupMessageStore: PopupMessage;
} = () => {
  const dispatch = useDispatch();

  const popupMessageStore = useSelector(popupMessageStoreSelector);

  const showPopup = (message: string) => {
    dispatch(showPopupMessageAction(message));
    setTimeout(() => dispatch(hidePopupMessageAction()), 5000);
  };

  return { showPopup, popupMessageStore };
};
