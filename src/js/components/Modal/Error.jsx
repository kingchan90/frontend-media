/* eslint-disable */
import React from 'react';
import { formatRawErrMsg } from '@utils/helpers';

import BodyContext from './BodyContext';

const Error = ({ error }) => {
  return (
    <BodyContext dialogCls="new-error-popup-dialog">
      <div className="error-crossmark">
        <div className="cross-icon">
          <span className="icon-cross-line line-left"></span>
          <span className="icon-cross-line line-right"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
      <div className={`text-center ${cls}`}>
        {formatRawErrMsg(error)}
      </div>
    </BodyContext>
  );
};

export default Error;
