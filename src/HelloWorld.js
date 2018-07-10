import React from "react";

const HelloWorld = (props) => {
  return (
    <div className="hello-world">
      Hello World <span className="hello-world__tech">{props.tech}!</span>
    </div>
  );
};

export default HelloWorld;
