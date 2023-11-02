import React, { useEffect, useState } from 'react'
import profile from '../images/tree.jpg';

const ProfileLeftSection = () => {
  const skills = ["JavaScript Developer", "C++ Developer","Software Developer"];
  const [skillidx, setSkillidx] = useState(0);
  useEffect(() => {
    const interval=setInterval(() => {
      setSkillidx((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [])
  const skill = skills[skillidx];
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
            <b className="is-visible">{skill}</b>
            {/* <b>JavaScript Developer</b>
            <b>C++ Developer</b> */}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProfileLeftSection;