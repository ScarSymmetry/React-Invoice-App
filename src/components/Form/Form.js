import { useState, useContext, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationObjects/schema';
import chevron from '../../assets/icon-arrow-left.svg';
import trashcan from '../../assets/icon-delete.svg';
import {
  DispatchContext,
  InvoicesContext,
} from '../../context/invoices.context';

import { useLocation, useParams } from 'react-router-dom';

import { generateRandomId } from '../../utils/generateId';
import dayjs from 'dayjs';
import Modal from '../Modal/Modal';
import styles from './Form.module.scss';

const initialFormValues = {
  id: '',
  createdAt: new Date().toISOString().slice(0, 10),
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

const Form = () => {
  const dispatch = useContext(DispatchContext);
  const { formOpen, initialInvoices } = useContext(InvoicesContext);
  const [editing, setEditing] = useState(false);

  const location = useLocation();
  const invoiceId = location.pathname.slice(-6);
  const testshit = initialInvoices.find((invoice) => invoice.id === invoiceId);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialFormValues,
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  console.log(invoiceId);

  useEffect(() => {
    reset(testshit);
  }, [invoiceId]);

  const submitFunction = (data) => {
    const [creationDate, paymentTermDate] = getValues([
      'createdAt',
      'paymentTerms',
    ]);

    const paymentDueISO = dayjs(creationDate)
      .add(Number(paymentTermDate), 'day')
      .format('YYYY-MM-DD');

    const formPayload = {
      ...initialFormValues,
      ...data,

      id: generateRandomId(),
      paymentDue: paymentDueISO,
      total: data.items.reduce((s, k) => s + k.total, 0),
    };

    dispatch({ type: 'ADD_INVOICE', payload: formPayload });
  };

  const getUnvalidatedFields = getValues();

  return (
    <Modal isOpen={1} opaque={true}>
      <div className={styles.formContainer}>
        <button className={styles.backButton}>
          {' '}
          <span>
            <img src={chevron} alt='back' />
          </span>{' '}
          Go back
        </button>

        <div className={styles.editId}>
          {editing ? (
            <h3>
              Edit<span>#{invoiceId}</span>
            </h3>
          ) : (
            <h3>New Invoice</h3>
          )}
        </div>

        <form
          onSubmit={handleSubmit(submitFunction)}
          className={styles.form}
          id='registerForm'
        >
          <fieldset className={styles.billFrom}>
            <h5 className={styles.billFrom__heading}>Bill From</h5>
            <label className={styles.streetFrom}>
              Street Address
              <input {...register('senderAddress.street')} type='text' />
            </label>

            <label className={styles.cityFrom}>
              City
              <input {...register('senderAddress.city')} type='text' />
            </label>
            <label className={styles.postCodeFrom}>
              Post Code
              <input {...register('senderAddress.postCode')} type='text' />
            </label>
            <label className={styles.countryFrom}>
              Country
              <input {...register('senderAddress.country')} type='text' />
            </label>
          </fieldset>

          <fieldset className={styles.billTo}>
            <h5 className={styles.billTo__heading}>Bill To</h5>
            <label className={styles.clientTo}>
              Client`s Name
              <input {...register('clientName')} type='text' />
            </label>
            <label className={styles.emailTo}>
              Client`s Email
              <input {...register('clientEmail')} type='text' />
            </label>
            <label className={styles.streetTo}>
              Street Address
              <input {...register('clientAddress.street')} type='text' />
            </label>
            <label className={styles.cityTo}>
              City
              <input {...register('clientAddress.city')} type='text' />
            </label>
            <label className={styles.postCodeTo}>
              Post Code
              <input {...register('clientAddress.postCode')} type='text' />
            </label>
            <label className={styles.countryTo}>
              Country
              <input {...register('clientAddress.country')} type='text' />
            </label>
          </fieldset>

          <fieldset className={styles.invoiceDates}>
            <label className={styles.invoiceStart}>
              Invoice Date
              <input {...register('createdAt')} type='date' />
            </label>
            <label className={styles.paymentDropdown}>
              Payment Terms
              <select {...register('paymentTerms')}>
                <option value='30'>Net 30 day</option>
                <option value='14'>Net 14 days</option>
                <option value='7'>Net 7 days</option>
                <option value='1'>Net 1 day</option>
              </select>
            </label>

            <label className={styles.projectDescription}>
              Project / Description
              <input
                {...register('description')}
                placeholder='e.g Design and prototype'
                type='text'
              />
            </label>
          </fieldset>

          <fieldset className={styles.itemsContainer}>
            <h5 className={styles.itemsContainer__title}>Item List</h5>

            {/* ACHTUNG! area that gives me endless f@cking headaches IS HERE */}

            {fields.map(({ id, name, quantity, price }, index) => {
              const [quantityOfItems, priceOfItems] = watch([
                `items.${index}.quantity`,
                `items.${index}.price`,
              ]);

              const totalPrice =
                (Number(quantityOfItems) || 0) * (Number(priceOfItems) || 0);

              setValue(`items.${index}.total`, totalPrice);

              return (
                <div key={id} className={styles.itemList}>
                  <label className={styles.itemName}>
                    Item Name
                    <input
                      {...register(`items.${index}.name`)}
                      type='text'
                      defaultValue={name}
                    />
                  </label>

                  <label className={styles.itemQuantity}>
                    Qty.
                    <input
                      {...register(`items.${index}.quantity`, {
                        maxLength: 6,
                        min: 1,
                      })}
                      type='number'
                      defaultValue={quantity}
                    />
                  </label>
                  <label className={styles.itemPrice}>
                    Price
                    <input
                      {...register(`items.${index}.price`, {
                        maxLength: 6,
                        min: 1,
                      })}
                      defaultValue={price}
                      type='number'
                    />
                  </label>

                  <div className={styles.totalCounter}>
                    <p>Total</p>
                    <h5>{totalPrice}</h5>
                  </div>

                  <button
                    type='button'
                    onClick={() => remove(index)}
                    className={styles.deleteItem}
                  >
                    <img src={trashcan} alt='delete' />
                  </button>
                </div>
              );
            })}
          </fieldset>

          <button
            onClick={() => append({})}
            type='button'
            className={`${styles.buttonComponent} ${styles.addNewItemButton}`}
          >
            + Add new item
          </button>
        </form>

        <fieldset className={styles.formButtonControls}>
          {editing ? (
            <div className={styles.formButtonControls__panel}>
              <button
                className={`${styles.buttonComponent} ${styles.cancelAndDiscardButton}`}
              >
                Cancel
              </button>

              <button
                onClick={() => setValue('status', 'pending')}
                type='submit'
                form='registerForm'
                className={`${styles.buttonComponent} ${styles.saveAndSendButton}`}
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className={styles.formButtonControls__panel}>
              <button
                className={`${styles.buttonComponent} ${styles.cancelAndDiscardButton}`}
              >
                Discard
              </button>
              <button
                onClick={() => submitFunction(getUnvalidatedFields)}
                className={`${styles.buttonComponent} ${styles.saveAsDraftButton}`}
              >
                Save as Draft
              </button>
              <button
                onClick={() => setValue('status', 'pending')}
                type='submit'
                form='registerForm'
                className={`${styles.buttonComponent} ${styles.saveAndSendButton}`}
              >
                Save & Send
              </button>
            </div>
          )}
        </fieldset>
      </div>
    </Modal>
  );
};

export default Form;
