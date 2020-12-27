import React, { useState } from "react";
import Box, { BoxProps } from "./Box";
import NewBoxForm from "./NewBoxForm";

let remove: (id: string) => void;

function BoxList() {
  const [boxes, setBoxes] = useState<BoxProps[]>([]);
  const add = (boxObj: BoxProps) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };
  remove = (id: string) => {
    setBoxes((boxes) => boxes.filter((box: BoxProps) => box.id !== id));
  };

  const boxComponents = boxes.map((box: BoxProps) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList;
export { remove };
