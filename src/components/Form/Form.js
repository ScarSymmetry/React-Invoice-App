import { useRef, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { schema } from './validationObjects/schema';
import { initialFormValues } from './validationObjects/initialFormValues';
import { useWindowSize } from '../hooks/useWindowSize';
import useClickOutside from '../hooks/useClickOutside';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import chevron from '../../assets/icon-arrow-left.svg';
import trashcan from '../../assets/icon-delete.svg';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addInvoice, updateInvoice } from '../../redux/invoices';
import { generateRandomId } from '../../utils/generateId';
import dayjs from 'dayjs';
import Modal from '../Modal/Modal';
import styles from './Form.module.scss';
import { motion } from 'framer-motion/dist/framer-motion';

const Form = ({ formOpened, setFormOpened }) => {
  const size = useWindowSize();
  const location = useLocation();
  const history = useHistory();
  const { invoices } = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const invoiceId = location.pathname.slice(-6);

  const invoiceToPrefill = invoices?.find(
    (invoice) => invoice.id === invoiceId
  );

  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    if (formOpened) resetAndCloseForm();
  });

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

  useEffect(() => {
    reset(initialFormValues);
    if (formOpened && invoiceToPrefill) reset(invoiceToPrefill);
  }, [formOpened, invoiceToPrefill, reset]);

  useEffect(() => {
    if (!formOpened) return;
    if (modalRef && modalRef.current) {
      formOpened
        ? disableBodyScroll(modalRef.current)
        : enableBodyScroll(modalRef.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [formOpened]);

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
      total: data.items.reduce(
        (grandTotal, item) => grandTotal + item.total,
        0
      ),
    };

    dispatch(addInvoice(formPayload));
    resetAndCloseForm();
  };

  const resetAndCloseForm = () => {
    setFormOpened(false);
    reset(initialFormValues);
    history.push('/');
  };

  const editInvoice = (data) => {
    const GrandTotalValue = data.items?.reduce(
      (grandTotal, item) => grandTotal + item.total,
      0
    );

    // dispatch({
    //   type: 'EDIT_INVOICE',
    //   payload: { id: data.id, data: data, total: GrandTotalValue },
    // });
    const itemsArray = data.items?.map((item) => item);

    const editedInvoices = {
      ...data,
      total: GrandTotalValue,
    };

    dispatch(updateInvoice(editedInvoices));

    resetAndCloseForm();
  };

  const animation = {
    hidden: {
      x: '-100%',
      transition: { type: 'spring', duration: 0.4 },
    },
    visible: {
      x: size.width <= 768 ? 0 : '105px',
      transition: { type: 'spring', duration: 0.4 },
    },
  };

  return (
    <Modal isOpen={formOpened} opaque={false}>
      {formOpened && (
        <motion.div
          className={styles.formContainer}
          ref={modalRef}
          variants={animation}
          initial='hidden'
          animate='visible'
          exit='hidden'
          key='form'
        >
          {size.width < 768 && (
            <button className={styles.backButton} onClick={resetAndCloseForm}>
              <span>
                <img src={chevron} alt='back' />
              </span>{' '}
              Go back
            </button>
          )}

          <div className={styles.editId}>
            {formOpened && invoiceToPrefill ? (
              <h3 className={styles.formTitle}>
                Edit<span>#</span>
                {invoiceId}
              </h3>
            ) : (
              <h3 className={styles.formTitle}>New Invoice</h3>
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
                <input
                  {...register('senderAddress.street')}
                  type='text'
                  style={{
                    border: errors.senderAddress?.street
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='senderAddress.street'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>

              <label className={styles.cityFrom}>
                City
                <input
                  {...register('senderAddress.city')}
                  type='text'
                  style={{
                    border: errors.senderAddress?.city
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='senderAddress.city'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.postCodeFrom}>
                Post Code
                <input
                  {...register('senderAddress.postCode')}
                  type='text'
                  style={{
                    border: errors.senderAddress?.postCode
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='senderAddress.postCode'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.countryFrom}>
                Country
                <input
                  {...register('senderAddress.country')}
                  type='text'
                  style={{
                    border: errors.senderAddress?.country
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='senderAddress.country'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
            </fieldset>

            <fieldset className={styles.billTo}>
              <h5 className={styles.billTo__heading}>Bill To</h5>
              <label className={styles.clientTo}>
                Client`s Name
                <input
                  {...register('clientName')}
                  type='text'
                  style={{
                    border: errors?.clientName ? '1px solid #EC5757' : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='clientName'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.emailTo}>
                Client`s Email
                <input
                  {...register('clientEmail')}
                  type='text'
                  style={{
                    border: errors?.clientEmail ? '1px solid #EC5757' : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='clientEmail'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.streetTo}>
                Street Address
                <input
                  {...register('clientAddress.street')}
                  type='text'
                  style={{
                    border: errors?.clientAddress?.street
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='clientAddress.street'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.cityTo}>
                City
                <input
                  {...register('clientAddress.city')}
                  type='text'
                  style={{
                    border: errors?.clientAddress?.city
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='clientAddress.city'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.postCodeTo}>
                Post Code
                <input
                  {...register('clientAddress.postCode')}
                  type='text'
                  style={{
                    border: errors?.clientAddress?.postCode
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='clientAddress.postCode'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
              <label className={styles.countryTo}>
                Country
                <input
                  {...register('clientAddress.country')}
                  type='text'
                  style={{
                    border: errors?.clientAddress?.country
                      ? '1px solid #EC5757'
                      : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='clientAddress.country'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
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
                <ErrorMessage
                  errors={errors}
                  name='paymentTerms'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>

              <label className={styles.projectDescription}>
                Project / Description
                <input
                  {...register('description')}
                  placeholder='e.g Design and prototype'
                  type='text'
                  style={{
                    border: errors?.description ? '1px solid #EC5757' : '',
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name='description'
                  render={({ message }) => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </label>
            </fieldset>

            <fieldset className={styles.itemsContainer}>
              <h5 className={styles.itemsContainer__title}>Item List</h5>
              <ErrorMessage
                errors={errors}
                name='items'
                render={({ message }) => (
                  <p className={styles.errorMessage}>{message}</p>
                )}
              />

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
                        style={{
                          border: errors.items?.[index]?.name
                            ? '1px solid #EC5757'
                            : '',
                        }}
                      />
                      {errors.items?.[index]?.name && (
                        <p className={styles.errorMessage}>
                          Item`s name missing
                        </p>
                      )}
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
                        style={{
                          border: errors.items?.[index]?.quantity
                            ? '1px solid #EC5757'
                            : '',
                        }}
                      />
                      {errors.items?.[index]?.quantity && (
                        <p className={styles.errorMessage}>Fill quantity FFS</p>
                      )}
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
                        style={{
                          border: errors.items?.[index]?.price
                            ? '1px solid #EC5757'
                            : '',
                        }}
                      />
                      {errors.items?.[index]?.price && (
                        <p className={styles.errorMessage}>Price missing</p>
                      )}
                    </label>

                    <div className={styles.totalCounter}>
                      <p>Total</p>
                      <h5>{totalPrice}</h5>
                    </div>

                    <button
                      type='button'
                      onClick={(e) => {
                        e.stopPropagation();
                        remove(index);
                      }}
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

          {/* control buttons ******************* */}
          <fieldset className={styles.formButtonControls}>
            {formOpened && invoiceToPrefill ? (
              <div className={styles.formButtonControls__panel}>
                <button
                  onClick={resetAndCloseForm}
                  className={`${styles.buttonComponent} ${styles.cancelButton}`}
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit(editInvoice)}
                  // type='submit'
                  // form='registerForm'
                  className={`${styles.buttonComponent} ${styles.saveChangesButton}`}
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className={styles.formButtonControls__panel}>
                <button
                  onClick={resetAndCloseForm}
                  className={`${styles.buttonComponent} ${styles.discardButton}`}
                >
                  Discard
                </button>
                <button
                  onClick={() => {
                    submitFunction(getValues());
                  }}
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
        </motion.div>
      )}
    </Modal>
  );
};

export default Form;
