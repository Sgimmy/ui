import React from 'react';
import FormAddUrl from '../components/AddNewArticle';
import ViewAnimation from '../components/ui/animation/ViewAnimation';
import Header from '../components/Header';

const NewArticleView: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <ViewAnimation>
        <FormAddUrl />
      </ViewAnimation>
    </React.Fragment>
  );
};

export default NewArticleView;
