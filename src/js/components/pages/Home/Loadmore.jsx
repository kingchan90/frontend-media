import React from 'react';

const MediaItem = ({...btnProps}) => {
  return (
    <div className="btns">
      <button className="btn btn-primary" {...btnProps}>
        Load more
      </button>
    </div>
  )
}
export default MediaItem;