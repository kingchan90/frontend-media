import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '@layouts/DefaultLayout';
import MediaList from './MediaList';
import LoadmoreComponent from './Loadmore';
import BackToTop from './BackToTop';

const Home = ({ global, globalAction, modalAction }) => {
  const { trending,  trendingParams: {offset, limit}  } = global;

  const onLoadmore = async () => {
    modalAction.loading();
    await globalAction.getTrending();
    modalAction.close();
  }

  const MediaListMarkup = trending ? <MediaList data={trending} modalAction={modalAction}/> : 'Empty.';
  const LoadmoreMarkup = true ? <LoadmoreComponent onClick={onLoadmore}/> : <></>;

  return (
    <Layout>
      <div id="home">
        <div className="container">
          <h1 className="page-title">Trending list</h1>
          {MediaListMarkup}
          {LoadmoreMarkup}
          <BackToTop />
        </div>
      </div>
    </Layout>
  );
};

Home.propTypes = {
  global: PropTypes.object,
  globalAction: PropTypes.object,
  modalAction: PropTypes.object,
};

const mapStateToProps = ({ global }) => ({
  global
});

const mapActionToProps = ({ global, modal }) => ({
  globalAction: global,
  modalAction: modal
});

export default connect(mapStateToProps, mapActionToProps)(Home);
