import PropTypes from 'prop-types';
import { STATUS_INITIAL } from '@constants';

const page = {
  state: {
    status: STATUS_INITIAL,
    context: {},
    errors: [],
  },
  reducers: {
    setStatus(state, payload) {
      return {
        ...state,
        status: payload,
      };
    },
    setContext(state, payload) {
      return {
        ...state,
        context: payload,
      };
    },
    setErrors(state, payload) {
      return {
        ...state,
        errors: payload,
      };
    },
  },
};

export const errorShape = PropTypes.shape({
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  message: PropTypes.any,
  error: PropTypes.any,
});

export default page;
