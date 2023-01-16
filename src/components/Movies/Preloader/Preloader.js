import React from 'react'
import './Preloader.css'

const Preloader = (props) => {

  const {isLoading} = props;

  return (
    <div className={isLoading ? "preloader_isActive" : "preloader"}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader
