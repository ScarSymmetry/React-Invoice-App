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
  );
};

export default Dropdown;
