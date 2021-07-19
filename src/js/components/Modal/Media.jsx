import React from 'react';
import PropTypes from 'prop-types';
import BodyContext from './BodyContext';
import * as getValue from 'lodash.get';

const Media = ({ media }) => {
  console.log(media)
  const imgProps = getValue(media, 'images.downsized_large', {});
  return (
    <BodyContext>
      <picture className="img-wrapper">
        <img width={imgProps.width} height={imgProps.height} src={imgProps.url} alt={media.title} className="img-fluid"/>
      </picture>
    </BodyContext>
  );
};

Media.propTypes = {
  media: PropTypes.object
};

export default Media;
