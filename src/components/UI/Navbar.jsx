import Modal from '@/components/UI/Modal.jsx';

const Navbar = ({ onDone }) => {
  const handleSumbit = () => {
    onDone();
  };

  return (
    <>
      <Modal onClose={onDone}>
        <form onSubmit={handleSumbit}>
          <p>navbar</p>
          <button type="button" onClick={onDone}>
            cancel
          </button>
        </form>
      </Modal>
    </>
  );
};
export default Navbar;
