import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/homepage.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${linkUrl}`)}
  >
    {/* Incluye la foto que se ven en los botones */}
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>Explore</span>
    </div>
  </div>
);

export default withRouter(MenuItem);