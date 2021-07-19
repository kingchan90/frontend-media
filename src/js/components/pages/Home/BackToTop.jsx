import React, { useState } from 'react';
import { scrollTop } from '@utils/helpers';

const MediaItem = ({...btnProps}) => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    const currentScroll = window.pageYOffset + window.innerHeight;
    if (!showScroll && currentScroll > window.innerHeight){
      setShowScroll(true)
    } else if (showScroll && currentScroll <= window.innerHeight){
      setShowScroll(false)
    }
  };

  const ButtonMarkup = showScroll ? (
    <button className="btn btn-primary btn-icon back-top" {...btnProps} onClick={scrollTop}>
      <span className="icon-arrow-up"></span>
    </button>
  ) : <></>;

  window.addEventListener('scroll', checkScrollTop)
  return ButtonMarkup;
}
export default MediaItem;