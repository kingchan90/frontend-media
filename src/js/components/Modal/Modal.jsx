import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';

const Modal = (props) => {
  if (typeof window !== 'undefined') {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.createPortal(
      props.children,
      modalRoot,
    );
  }
  return null;
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
