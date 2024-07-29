import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import { IoClose } from 'react-icons/io5';

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <IoClose size={40} />
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        }}
        open
        className="modal"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, x: 30 }}
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById('navbar')
  );
}
