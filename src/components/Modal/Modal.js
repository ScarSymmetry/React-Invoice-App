import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { useRef, useEffect } from 'react';

const rootModal = document.getElementById('modal');

const Modal = ({ children, isOpen = false, opaque }) => {
  const modalRef = useRef();
  useEffect(() => {
    if (isOpen) disableBodyScroll(document.body);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={modalRef}
      className={`${styles.modalWrapper} ${
        opaque ? styles.backgroundOpaque : null
      }`}
    >
      {children}
    </div>,
    rootModal
  );
};

export default Modal;
