import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';
import qs from 'qs';
import hydrate, { init } from 'store/hydrate';
import routes from 'routes';
import '@bootstrap';
import 'controllers';
import Error500 from '@pages/errors/Error500';
import Error404 from '@pages/errors/Error404';
import { STATUS_ERROR, PATH } from '@constants';
import RouteParser from 'route-parser';

const Bootstrap = ({ store, params }) => {
  const history = useHistory();
  const state = store.getState();
  const { page: { status } } = state;
  const { location: { pathname, search } } = params;
  let notFound = true;

  routes.forEach(item => {
    const route = new RouteParser(item.path);
    if (route.match(pathname)) {
      notFound = false;
    }
  });
  if (notFound) {
    history.push(PATH.notfound);
    return null;
  }

  if (status === STATUS_ERROR) {
    return (
      <Error500 />
    );
  }


  useEffect(() => {
    const query = search.length > 0 ? qs.parse(search.slice(1)) : {};
    const request = {
      path: pathname,
      query,
      url: `${pathname}${search}`,
    };
    console.log(init);
    init(request, store).then(() => {
      hydrate(request, store);
    });
  }, [pathname, search]);

  return (
    <Switch>
      {routes.map(routeProps => {
        return (
          <Route {...routeProps} key={routeProps.path} />
        );
      })}
    </Switch>
  );
};

Bootstrap.propTypes = {
  store: PropTypes.object,
  params: PropTypes.object,
};

export default memo(Bootstrap, (props, nextProps) => {
  const { params: { location: prevLocation } } = props;
  const { params: { location: nextLocation } } = nextProps;
  return prevLocation.pathname === nextLocation.pathname
    && prevLocation.search === nextLocation.search;
});
