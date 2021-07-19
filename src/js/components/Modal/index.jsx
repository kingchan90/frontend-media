import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal';
import Loading from '../Loading';


const ModalContainer = ({ modal, modalAction }) => {
  const hideModal = () => {
    modalAction.close();
  };
  if (!modal.isPopup && !modal.isLoading) {
    return null;
  }
  return (
    <Modal>
      {modal.isLoading ?
        <div className="loading-popup">
          <Loading />
        </div>
        :
        <>
          <div
            style={{ display: modal.isPopup ? 'flex' : 'none' }}
            className={`modal fade ${modal.isPopup ? 'show' : ''}`}
          >
            <div onClick={hideModal} className="modal-bg"></div>
            {modal.component}
          </div>
        </>
      }
    </Modal>
  );
};

ModalContainer.propTypes = {
  modal: PropTypes.object,
  modalAction: PropTypes.object,
};

const mapStateToProps = ({ modal }) => ({
  modal,
});

const mapActionToProps = ({ modal }) => ({
  modalAction: modal,
});
export default connect(mapStateToProps, mapActionToProps)(ModalContainer);
