import React from 'react';
import MediaItem from './MediaItem';
import PropTypes from 'prop-types';

const MediaList = ({ data = {}, modalAction }) => {
  return (
    <section className="media-list container">
      <div className="row">        
        {
          data && data.map((mediaProps, index) => (
            <MediaItem media={mediaProps}  key={mediaProps.id+index} modalAction={modalAction} />
          ))
        }
      </div>
    </section>
  )
}

MediaList.prototype = {
  data: PropTypes.array,
  modalAction: PropTypes.object
}

export default MediaList;