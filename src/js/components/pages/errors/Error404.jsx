/* eslint-disable */
import React from 'react';
import Header from '@components/layouts/partials/Header';
import Footer from '@components/layouts/partials/Footer';
import notFoundImg from '@assets/images/404.png';
import { EMAIL_ADDRESS } from '@constants';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div id="not-found" class="page-wrapper vertical-center-page">
      <Header />
      <div id="page-content">
        <div className="container text-center">
          <img className="img-fluid" src={notFoundImg} />
          <div className="error error_404">
            <h2 className="text-center title">
            Sorry but this page could not be found. You can return to the home page or contact us with any questions
            </h2>
            <div className="btns">
              <Link className="btn btn-primary" to="/">
                {'Back to the homepage'}
              </Link>
              <a className="btn btn-primary" href={`mailto:${EMAIL_ADDRESS}`}>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
