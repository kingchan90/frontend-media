import { preRouteSync } from 'store/hydrate';
import { configFromState } from '@utils/http';

preRouteSync(({ store }) => {
  const { dispatch: { axios } } = store;
  axios.setConfig(configFromState(store.getState()));
});
