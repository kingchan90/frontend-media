import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Modal from "@components/Modal";
import MetaTags from "@components/MetaTags.jsx";
import Bootstrap from '@components/Bootstrap';

const App = ({ store, context = {}, request = {} }) => {
  const routerProps = { context, location: request.path };
  return (
    <Provider store={store}>
      <Router {...routerProps}>
        <Route
          path="/"
          render={(params) => {
            return (
              <>
              <MetaTags />
              <Bootstrap params={params} store={store} />
              <Modal/>
              </>
            );
          }}
        />
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  context: PropTypes.object,
};

export default App;
