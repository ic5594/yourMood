import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { IoClose } from 'react-icons/io5';

export default function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="modal_area">
        <IoClose
          size={37}
          style={{
            zIndex: '10',
            color: 'white',
            position: 'absolute',
            left: '30%',
          }}
          onClick={onClose}
        />
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
      </div>
    </>,
    document.getElementById('navbar')
  );
}
