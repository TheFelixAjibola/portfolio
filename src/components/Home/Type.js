import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Frontend Developer.",
          "An IT Enterpreneur.",
          "A Freelancer.",
          "Crafting Seamless User Experiences through Frontend Development.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
