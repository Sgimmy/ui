import { useSelector } from 'react-redux';
import { articleSelector } from '../../store/selectors/article.selector';
import { GetArticleState } from '../../api/getArticle';

export const useGetArticle: () => {
  article: GetArticleState;
} = () => {
  const article = useSelector(articleSelector);

  return {
    article,
  };
};
