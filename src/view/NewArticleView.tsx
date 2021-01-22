import React from 'react';
import FormAddUrl from '../components/AddNewArticle';
import ViewAnimation from '../components/ui/animation/ViewAnimation';

const NewArticleView: React.FC = () => {
  return (
    <ViewAnimation>
      <FormAddUrl />
    </ViewAnimation>
  );
};

export default NewArticleView;
