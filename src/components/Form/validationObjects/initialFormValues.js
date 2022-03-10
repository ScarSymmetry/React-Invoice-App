import dayjs from 'dayjs';

export const initialFormValues = {
  id: '',
  createdAt: dayjs().format('YYYY-MM-DD'),
  paymentDue: '',
  description: '',
  paymentTerms: 30,
  clientName: '',
  clientEmail: '',
  status: 'draft',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [],
  total: '',
};
