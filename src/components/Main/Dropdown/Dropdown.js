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
  );
};

export default Dropdown;
