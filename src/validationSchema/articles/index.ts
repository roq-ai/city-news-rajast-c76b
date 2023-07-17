import * as yup from 'yup';

export const articleValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  category_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
