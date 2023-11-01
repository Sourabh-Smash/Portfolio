import React from 'react'
import profile from "../images/tree.jpg";

const MainBox = () => {
  return (
    <div className="container">
      <section className="profile">
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
        <div className="right">
          <ul className="contact">
            <li>
              <i className="uil uil-phone-volume"></i>
              <strong>Phone : </strong> +91 6378262557
            </li>
            <li>
              <i className="uil uil-envelope"></i>
              <strong>Email : </strong> sourabhmanawat@gmail.com
            </li>
          </ul>
          <ul className="socials">
            <li>
              <a href="#">
                <l className="uil uil-facebook"></l>
              </a>
            </li>
            <li>
              <a href="#">
                <l className="uil uil-twitter"></l>
              </a>
            </li>
            <li>
              <a href="#">
                <l className="uil uil-dribbble"></l>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MainBox;