import { useDispatch, useSelector } from 'react-redux';
import { tagsSelector } from '../../store/selectors/tags.selector';
import { selectedTagAction } from '../../store/actions/tags.action';

export const useTags: () => {
  tags: string[];
  selectedTags: (tag: string) => void;
} = () => {
  const dispatch = useDispatch();

  const tags = useSelector(tagsSelector);

  const selectedTags = (tag: string) => {
    dispatch(selectedTagAction(tag));
  };

  return {
    tags,
    selectedTags,
  };
};
