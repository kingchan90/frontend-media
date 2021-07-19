import { get } from '@utils/http';
import { get as getValue} from 'lodash';
import { queryBuilder } from '@utils/helpers';

const global = {
  state: {
    trending: [],
    trendingParams: {
      limit: 20,
      offset: 1
    },
  },
  reducers: {
    setState(state, payload) {
      return {
        ...state,
        ...payload
      };
    },
  },
  effects: dispatch => ({
    async getTrending(payload, rootState) {
      let config = getValue(rootState, 'axios.config', {});
      const trendingParams = getValue(rootState, 'global.trendingParams', {});
      const trending = getValue(rootState, 'global.trending', {});
      config.params = Object.assign(config.params, trendingParams, {});
      let query = '';
      if(payload) {
        query = queryBuilder(payload)
      }
      try {
        const response = await get(`${config.trendingUrl}${query}`, config);
        dispatch.global.setState({ trending: trending.concat(response.data) });
        dispatch.global.setState({ trendingParams:  {...trendingParams, offset: trendingParams.offset + trendingParams.limit}});

      } catch (error) {
        dispatch.global.setState({ error: getValue(error, 'response.data') });
        console.error('error', error);
      }
    },
  }),
};

export default global;
