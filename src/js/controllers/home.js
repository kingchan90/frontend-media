import { route } from 'store/hydrate';
import { get } from '@utils/http';
import { STATUS_LOADING, STATUS_SUCCESS } from '@constants';
import * as getValue from 'lodash.get';

route('/', async ({ store }) => {
  const { dispatch: { page, global } } = store;
  page.setStatus(STATUS_LOADING);
  await global.getTrending();
  page.setStatus(STATUS_SUCCESS);
});
