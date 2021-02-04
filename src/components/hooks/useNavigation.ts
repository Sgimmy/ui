import { useHistory } from 'react-router-dom';
import { RouteLink } from '../../constants/route';

export const useNavigation: () => {
  goBack: () => void;
  goToAddArticle: () => void;
} = () => {
  const history = useHistory();

  const goToAddArticle = () => history.push(RouteLink.newArticle);
  const goBack = () => history.goBack();

  return {
    goBack,
    goToAddArticle,
  };
};
