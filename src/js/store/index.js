import { init } from '@rematch/core';
import * as models from './models';

let initialState;
if (process.env.IS_BROWSER) {
  initialState = window.__initialState;
}

export const createStore = () => {
  return init({
    models,
    redux: {
      initialState,
    }
  });
};

const store = createStore();
export default store;
