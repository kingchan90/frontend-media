const axios = {
  state: {
    config: {},
    params: {}
  },
  reducers: {
    setConfig(state, payload) {
      return {
        ...state,
        config: payload,
      };
    }
  },
};

export default axios;
