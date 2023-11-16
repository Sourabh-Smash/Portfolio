import React from "react";
import img from "../images/tree.jpg";
import ProjectTech from "./ProjectTech";
import ProjectImgs from "./ProjectImgs";

const ProjectWork = () => {
  return (
    <section className="work">
      <h1 className="section_heading">My Work & Review</h1>
      <div className="wrapper">
        <div className="slider">slider</div>
        <div className="portfolio">
          <div className="tabs">
            <ul>
              <ProjectTech activeClass="active" dataProp="*" tech="All" />
              <ProjectTech dataProp=".design" tech="UI/UX Design" />
              <ProjectTech dataProp=".frontend" tech="FrontEnd" />
              <ProjectTech dataProp=".backend" tech="BackEnd" />
            </ul>
          </div>
          <div className="portfolio_wrapper">
            <ProjectImgs classinfo="item design" img={img} />
            <ProjectImgs classinfo="item frontend" img={img} />
            <ProjectImgs classinfo="item backend" img={img} />
            <ProjectImgs classinfo="item backend" img={img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
