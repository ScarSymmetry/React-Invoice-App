import * as yup from 'yup';
import dayjs from 'dayjs';

export const schema = yup.object().shape({
  description: yup.string().required('Fill the description'),
  paymentTerms: yup.string().required('Payment terms required'),
  createdAt: yup.date().transform((value, originalValue, context) => {
    if (!context.isType(value))
      return dayjs(originalValue).format('YYYY-MM-DD');
  }),
  clientName: yup
    .string()
    .max(25, 'nice joke')
    .required('Client`s name is required'),
  clientEmail: yup
    .string()
    .email('Email is not valid')
    .required('Email required'),
  senderAddress: yup.object().shape({
    street: yup
      .string()
      .max(32, 'make that name shorter')
      .required('Sender`s street required'),
    city: yup
      .string()
      .max(16, 'nice name...')
      .required('Sender`s city required'),
    postCode: yup
      .string()
      .max(16, 'thats too long')
      .min(4, 'at least 4 digits')
      .required('Postal code required'),
    country: yup
      .string()
      .max(32, 'thats helluva long name')
      .required('Sender`s country required'),
  }),
  clientAddress: yup.object().shape({
    street: yup
      .string()
      .max(32, 'Freddy Kruger is jealous of this')
      .required('Client`s street required'),
    city: yup
      .string()
      .max(16, 'nice city name..')
      .required('Client`s city required'),
    postCode: yup
      .string()
      .max(16, 'postal code from hell?')
      .min(4, 'make it longer')
      .required('Postal code required'),
    country: yup
      .string()
      .max(32, 'nice name,boi')
      .required('Client`s country required'),
  }),
  items: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .max(32, 'that shit is too long')
          .required('Item name is required'),
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
