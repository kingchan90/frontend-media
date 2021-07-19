import React from 'react';
import Error from '@components/Modal/Error';
import Loading from '@components/Loading';
import Media from '@components/Modal/Media';

const modal = {
  state: {
    component: '',
    isPopup: false,
    isLoading: false,
    timeOut: true,
  },
  reducers: {
    setPopup(state, component) {
      return {
        ...state,
        component,
        isPopup: true,
        isLoading: false,
      };
    },
    setLoading(state, component) {
      return {
        ...state,
        component,
        isPopup: false,
        isLoading: true,
      };
    },
    close(state) {
      clearTimeout(state.timeOut);
      return {
        ...state,
        isPopup: false,
        isLoading: false,
      };
    },
    setTime(state, timeOut) {
      return {
        ...state,
        timeOut
      };
    },
  },
  effects: (dispatch) => ({
    loading() {
      dispatch.modal.setLoading(<Loading />);
    },
    showError(error) {
      dispatch.modal.setPopup(<Error error={error} />);
    },
    showMedia(mediaProps) {
      dispatch.modal.setPopup(<Media media={mediaProps} />);
    }
  }),
};

export default modal;
