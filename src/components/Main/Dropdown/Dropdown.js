import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

import styles from './Dropdown.module.scss';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../../redux/invoices';

const Dropdown = ({ open, onClickOutside }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const [statusCheckbox, setStatusCheckbox] = useState([
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

  const handleCheckBox = (id, e) => {
    setStatusCheckbox(
      statusCheckbox.map((status) => {
        if (status.id === id) {
          const filterByStatus = e.target.checked ? status.value : '';
          dispatch(changeStatus(filterByStatus));
          return {
            ...status,
            checked: !status.checked,
          };
        }
        return {
          ...status,
          checked: false,
        };
      })
    );
  };

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
                  onChange={(e) => {
                    handleCheckBox(index, e);
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
