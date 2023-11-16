import React from 'react'

const ProjectTech = ({activeClass,dataProp,tech}) => {
  return (
    <li>
      <a className={activeClass} href="#" data-filter={dataProp}>
        {tech}
      </a>
    </li>
  );
}

export default ProjectTech;