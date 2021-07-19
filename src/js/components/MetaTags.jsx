import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { get as getValue} from 'lodash';

const MetaTags = ({ global }) => {
  const metaTitle = getValue(global, 'metaTitle', '').length > 0 ?
    getValue(global, 'metaTitle', '') :
    'MessageMedia - Frontend';
  return (
    <Helmet>
      <title>{metaTitle}</title>
    </Helmet>
  );
};

const mapStateToProps = ({ global }) => ({ global });
MetaTags.propTypes = {
  global: PropTypes.object,
};

export default connect(mapStateToProps)(MetaTags);
