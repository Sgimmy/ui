import React, { useEffect } from 'react';
import Input from '../ui/Input';
import InputTags from '../ui/InputTags';
import PrimaryButton from '../ui/button/PrimaryButton';
import { useForm } from 'react-hook-form';
import { SendArticle } from '../../constants/types';
import { SendArticleType } from '../../constants/enum';
import { schema } from './index.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSendArticle } from '../hooks/useSendArticle';
import { usePopupMessage } from '../hooks/usePopupMessage';

/* eslint-disable @typescript-eslint/ban-ts-comment */

const FormAddUrl: React.FC = () => {
  const { sendArticleAction, loading, clearForm } = useSendArticle();

  const { showPopup } = usePopupMessage();

  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    watch,
    errors,
    clearErrors,
    reset,
  } = useForm<SendArticle>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleChangeSource = (
    val: string | string[],
    type: SendArticleType
  ) => {
    clearErrors(type);
    setValue(type, val);
  };

  useEffect(() => {
    if (clearForm) {
      reset();
      showPopup('Link inviato con successo');
    }
  }, [clearForm]);

  const clearValue = (type: SendArticleType) => () => {
    clearErrors(type);
    setValue(type, '');
  };

  const watchValue = watch();

  React.useEffect(() => {
    register('source', { required: true });
    register('title');
    register('description');
    register('tags', { required: true });
    return () => {
      unregister(`source`);
      unregister(`title`);
      unregister(`description`);
      unregister(`tags`);
    };
  }, [register]);

  return (
    <>
      <Input
        value={watchValue.source}
        setValue={val => handleChangeSource(val, SendArticleType.source)}
        placeholder="Inserisci il link da salvare"
        clear={clearValue(SendArticleType.source)}
        errorMessage={errors.source?.message}
      />
      <Input
        value={watchValue.title}
        setValue={val => handleChangeSource(val, SendArticleType.title)}
        placeholder="Se vuoi inserisci il titolo"
        clear={clearValue(SendArticleType.title)}
      />
      <Input
        value={watchValue.description}
        setValue={val => handleChangeSource(val, SendArticleType.description)}
        placeholder="Se vuoi inserisci la descrizione"
        clear={clearValue(SendArticleType.description)}
      />
      <InputTags
        setTags={val => handleChangeSource(val, SendArticleType.tags)}
        tags={watchValue.tags}
        // @ts-ignore
        errorMessage={errors.tags?.message}
      />
      <PrimaryButton
        text="Invia"
        onClick={handleSubmit(sendArticleAction)}
        loading={loading}
      />
    </>
  );
};

export default FormAddUrl;
