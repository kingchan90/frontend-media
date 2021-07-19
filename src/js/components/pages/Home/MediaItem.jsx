import React from 'react';
import * as getValue from 'lodash.get';

const MediaItem = ({ media, modalAction}) => {
  const imgProps = getValue(media, 'images.downsized_medium')
  const user = getValue(media, 'user', null);
  const userMarkUp = user ? (
    <div className="user">
      <div className="avatar">
        <img src={user.avatar_url} alt={user.username} className="img-fit"/>
      </div>
      <a href={user.profile_url} target="blank" className="username">{user.username}</a>
    </div>
  ) : <></>

  const onClickImg = () => {
    console.log(modalAction)
    modalAction.showMedia(media);
  }
  return (
    <div className="col-6 col-md-4 col-lg-3 media-item">
      <div className="inner" onClick={onClickImg}>
        <picture className="img-wrapper">
          <img width={imgProps.width} height={imgProps.height} src={imgProps.url} alt={media.title} className="img-fit"/>
        </picture>
        <div className="social">
          <div className="social-item">
            <a href="#" className="social-link">
              <span className="icon-attachment"></span>
            </a>
          </div>
          <div className="social-item">
            <a href="#" className="social-link">
              <span className="icon-eye"></span>
              99
            </a>
          </div>
          <div className="social-item">
            <a href="#" className="social-link">
              <span className="icon-heart"></span>
              99
            </a>
          </div>
          <div className="social-item">
            <a href="#" className="social-link">
              <span className="icon-bubble"></span>
              99
            </a>
          </div>
        </div>
      </div>
      { userMarkUp }
    </div>
  )
}

export default MediaItem;