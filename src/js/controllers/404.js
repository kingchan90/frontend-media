import { route } from 'store/hydrate';
import { STATUS_SUCCESS, PATH } from '@constants';

route(PATH.notfound, async ({ store }) => {
  const { dispatch: { page } } = store;
  page.setStatus(STATUS_SUCCESS);
});
