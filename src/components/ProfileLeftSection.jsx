import React from 'react'
import profile from '../images/tree.jpg';

const ProfileLeftSection = () => {
  return (
    <div className="left">
      <div className="avatar_block">
        <img src={profile} alt="img" />
        <span>
          <i className="uil uil-comment-dots"></i>
        </span>
      </div>
      <div>
        <h2>Sourabh Manawat</h2>
        <p className="cd-headline loading-bar">
          <span className="cd-words-wrapper">
            <b className="is-visible">Software Developer</b>
            <b>JavaScript Developer</b>
            <b>C++ Developer</b>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProfileLeftSection;