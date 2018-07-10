import React from "react";

const ButtonGroup = (props) => {

  const {onClick, technologies} = props;

  return (<div>
    {
      technologies.map((tech, i) => (
        <button data-btn={tech} key={`btn-${i}`} className="hello-btn" onClick={onClick}>
        {tech}
      </button>))
    }

  </div>)
}

export default ButtonGroup;
