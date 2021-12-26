import * as yup from 'yup';

export const schema = yup.object().shape({
  description: yup.string().required('Fill the description'),
  paymentTerms: yup.string().required('Payment terms required'),
  clientName: yup.string().required('Client`s name is required'),
  clientEmail: yup
    .string()
    .email('Email is not valid')
    .required('Email required'),
  senderAddress: yup.object().shape({
    street: yup.string().max(32).required('Sender`s street required'),
    city: yup.string().max(16).required('Sender`s city required'),
    postCode: yup.string().max(16).min(4).required('Postal code required'),
    country: yup.string().max(16).required('Sender`s country required'),
  }),
  clientAddress: yup.object().shape({
    street: yup.string().max(32).required('Client`s street required'),
    city: yup.string().max(16).required('Client`s city required'),
    postCode: yup.string().max(16).min(4).required('Postal code required'),
    country: yup.string().max(16).required('Client`s country required'),
  }),
  items: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().max(16).required('Item name is required'),
        quantity: yup
          .number()
          .positive()
          .typeError('Invalid input')
          .required('Quantity required'),
        price: yup
          .number()
          .positive()
          .typeError('Invalid input')
          .required('Price required'),
        total: yup.number(),
      })
    )
    .min(1, 'Add an item'),
});
