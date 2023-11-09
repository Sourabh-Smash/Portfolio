import React from "react";

const PersonalDetails = () => {
  return (
    <section className="about">
      <h1 className="section_heading">ABOUT US!</h1>
      <div className="content">
        <div className="left">
          <h2>Im Sourabh Manawat</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quam
            exercitationem illo vero, consequuntur ullam recusandae dolores
            aliquam laudantium magni dolorum nulla impedit at cupiditate quasi!
            Distinctio dolores est in.
          </p>
          <button>Download CV</button>
        </div>
        <div className="right">
          <p>
            <span>Name</span>
            <span>Sourabh Manawat</span>
          </p>
          <p>
            <span>Date Of Birth</span>
            <span>28 May 2000</span>
          </p>
          <p>
            <span>Spoken Language</span>
            <span>Hindi - English</span>
          </p>
          <p>
            <span>Nationality</span>
            <span>Bharat</span>
          </p>
          <p>
            <span>Interest</span>
            <span>Music, Reading, Travel</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
