/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { STATUS_LOADING, STATUS_SUCCESS } from '@constants';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Loading from "@components/Loading";

const DefaultLayout = ({ children, pageStatus }) => {
  return (
    <div id="page" className="vertical-center-page">
      <Header />
      <div id="page-content" >
        {pageStatus === STATUS_LOADING && <Loading />}
        {pageStatus === STATUS_SUCCESS && children}
      </div>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
  pageStatus: PropTypes.number,
};

const mapStateToProps = ({ page }) => ({
  pageStatus: page.status,
});

export default connect(mapStateToProps)(DefaultLayout);
