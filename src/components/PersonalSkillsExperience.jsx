import React from "react";

const PersonalSkillsExperience = () => {
  return (
    <section className="skills">
      <h1 className="section_heading">Education & Skills</h1>
      <div className="content">
        <div className="left">
          <div className="inner_left">
            <div className="heading">
              <i className="uil uil-graduation-cap"></i>
              <h5>Education</h5>
            </div>
            <div className="timeline_wrapper">
              <div className="item">
                <p>2000-2004</p>
                <p className="center">HighSchool</p>
                <p>Bacholer in Computer & Science</p>
              </div>
              <div className="item">
                <p>2000-2004</p>
                <p className="center">University</p>
                <p>Bacholer in Computer & Science</p>
              </div>
              <div className="item">
                <p>2000-2004</p>
                <p className="center">University</p>
                <p>Bacholer in Computer & Science</p>
              </div>
            </div>
          </div>
          <div className="inner_right">
            <div className="heading">
              <i className="uil uil-suitcase-alt"></i>
              <h5>Experience</h5>
            </div>
            <div className="item">
              <p>2000-2004</p>
              <p className="center">HighSchool</p>
              <p>Bacholer in Computer & Science</p>
            </div>
            <div className="item">
              <p>2000-2004</p>
              <p className="center">University</p>
              <p>Bacholer in Computer & Science</p>
            </div>
            <div className="item">
              <p>2000-2004</p>
              <p className="center">University</p>
              <p>Bacholer in Computer & Science</p>
            </div>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </section>
  );
};

export default PersonalSkillsExperience;
