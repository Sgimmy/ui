import { useSelector } from 'react-redux';
import { articleListSelector } from '../../store/selectors/articleList.selector';
import { GetArticleListState } from '../../api/getArticleList';

export const useGetArticleList: () => {
  articleList: GetArticleListState;
} = () => {
  const articleList = useSelector(articleListSelector);

  return {
    articleList,
  };
};
