import React, { useEffect, useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const hover = useRef();

  const isHovered = useHover(hover);

  useEffect(() => console.log(isHovered), [isHovered]);
  return (
    <div
      ref={hover}
      style={{
        width: 300,
        height: 300,
        backgroundColor: "rebeccapurple",
      }}
    >
      {isHovered && <h1>Вы навели курсор на объект</h1>}
    </div>
  );
};

export default Hover;
