import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

const rootModal = document.getElementById('modal');

const Modal = ({ children, isOpen = false, opaque }) => {
  // if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key='modal'
          className={`${styles.modalWrapper} ${
            opaque ? styles.backgroundOpaque : null
          }`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,

    rootModal
  );
};

export default Modal;
