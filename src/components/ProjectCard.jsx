import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
  imgSrc, 
  title,
  tags,
  projectLink,
  classes
}) => {
  return (
    <div className="">
      <figure className="img-box ">
        <img 
        src={imgSrc} 
        alt={title}
        loading='lazy' 
        className="img-cover" 
        />
      </figure>

      <div className="">

      <div> 
        <h3 className="title-1">
          {title}
        </h3>
      </div>

      </div>
    </div>
    
  )
}

ProjectCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard