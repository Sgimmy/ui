import * as yup from 'yup';

export const schema = yup.object().shape({
  source: yup
    .string()
    .url('Il link non è un URL')
    .required("Il link dell'articolo è richiesto"),
  title: yup.string(),
  description: yup.string(),
  tags: yup
    .array()
    .min(1, 'Inserisci almeno un tag')
    .required('Inserisci almeno un tag'),
});
