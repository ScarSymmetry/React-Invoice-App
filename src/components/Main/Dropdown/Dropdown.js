import { useRef, useContext } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

import {
  DispatchContext,
  InvoicesContext,
} from '../../../context/invoices.context';
import styles from './Dropdown.module.scss';

const Dropdown = ({ open, onClickOutside }) => {
  const modalRef = useRef();
  const dispatch = useContext(DispatchContext);
  const { statusCheckbox } = useContext(InvoicesContext);

  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  if (!open) return null;

  return (
    <div ref={modalRef} className={styles.popUpInputs}>
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
    </div>
  );
};

export default Dropdown;
