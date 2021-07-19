import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useAppPositionSwitch } from '@utils/hooks';

const BodyContext = ({ children, modalAction, dialogCls, contentCls }) => {
  const hideModal = () => {
    modalAction.close();
  };
  useAppPositionSwitch();
  return (
    <div className={`modal-dialog ${dialogCls}`}>
      <div className={`modal-content ${contentCls}`}>
        <div className="modal-close-area">
          <div className="modal-close-event" onClick={hideModal}>
            <span className="icon-cross"></span>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

BodyContext.propTypes = {
  children: PropTypes.object,
  modalAction: PropTypes.object,
  dialogCls: PropTypes.string,
  contentCls: PropTypes.string,
};

const mapStateToProps = ({ modal }) => ({
  modal,
});
const mapActionToProps = ({ modal }) => ({
  modalAction: modal,
});
export default connect(mapStateToProps, mapActionToProps)(BodyContext);
