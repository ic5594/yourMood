import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        open
        className="modal"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: 30 }}
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById('navbar')
  );
}
