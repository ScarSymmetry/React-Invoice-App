import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

const rootModal = document.getElementById('modal');
const animation = {
  hidden: {
    x: '-100%',
    transition: { type: 'spring', duration: 0.5 },
  },
  visible: {
    x: 0,
    transition: { type: 'spring', duration: 0.5 },
  },
};

const Modal = ({ children, isOpen = false, opaque }) => {
  // if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={animation}
          initial='hidden'
          animate='visible'
          exit='hidden'
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
