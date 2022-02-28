<<<<<<< HEAD
import { useState, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

import styles from './Dropdown.module.scss';

const Dropdown = ({ open, onClickOutside }) => {
  const modalRef = useRef();

  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  const [dropDownValues, setDropDownValues] = useState([
    {
      id: 0,
      value: 'draft',
      checked: false,
    },
    {
      id: 1,
      value: 'pending',
      checked: false,
    },
    {
      id: 2,
      value: 'paid',
      checked: false,
    },
  ]);

  const handleChange = (index) => {
    setDropDownValues(
      dropDownValues.map((option) => {
        if (index === option.id) {
        //   dispatch({
        //     type: 'FILTER_INVOICE',
        //     status: option.checked ? null : option.value,
        //   });
          return { ...option, checked: !option.checked };
        }

        return { ...option, checked: false };
      })
    );
  };

  if (!open) return null;

  return (
    <div ref={modalRef} className={styles.popUpInputs}>
      <div className={styles.checkboxWrapper}>
        {dropDownValues.map((box, index) => (
          <div className={styles.checkboxContainer} key={index}>
            <input
              type='checkbox'
              name={box.value}
              id={box.id}
              checked={box.checked}
              onChange={() => {
                handleChange(index);
              }}
            />
            <label htmlFor={box.id}>{box.value}</label>
          </div>
        ))}
      </div>
    </div>
=======
import { useRef, useContext } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

import {
  DispatchContext,
  InvoicesContext,
} from '../../../context/invoices.context';
import styles from './Dropdown.module.scss';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

const Dropdown = ({ open, onClickOutside }) => {
  const modalRef = useRef();
  const dispatch = useContext(DispatchContext);
  const { statusCheckbox } = useContext(InvoicesContext);

  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={modalRef}
          className={styles.popUpInputs}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.checkboxWrapper}>
            {statusCheckbox.map((box, index) => (
              <div className={styles.checkboxContainer} key={index}>
                <input
                  type='checkbox'
                  name={box.value}
                  id={box.id}
                  checked={box.checked}
                  onChange={() => {
                    dispatch({
                      type: 'CHANGE_STATUS',
                      payload: box.checked ? '' : box.value,
                    });
                    dispatch({ type: 'SET_FILTER', payload: index });
                  }}
                />
                <label htmlFor={box.id}>{box.value}</label>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
>>>>>>> master
  );
};

export default Dropdown;
