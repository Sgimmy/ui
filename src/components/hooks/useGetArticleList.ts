import { useSelector } from 'react-redux';
import { articleListSelector } from '../../store/selectors/articleList.selector';
import { GetArticleListState } from '../../api/getArticleList';
import { selectedTagSelector } from '../../store/selectors/tags.selector';

export const useGetArticleList: () => {
  articleList: GetArticleListState;
} = () => {
  const articleList = useSelector(articleListSelector);
  const selectedTag = useSelector(selectedTagSelector);

  const filteredArticle = articleList.data.filter(article =>
    article.tags?.includes(selectedTag)
  );

  return {
    articleList: {
      ...articleList,
      data: selectedTag.length > 0 ? filteredArticle : articleList.data,
    },
  };
};
