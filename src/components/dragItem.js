import React, { memo, useRef } from "react";
import { useDrag } from "react-dnd";

const DragItem = memo(({ id,objIndex,obj, children }) => {
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    item: { id,objIndex,obj, type: "OBJ" },
    collect: monitor => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });

  connectDrag(ref);

  const opacity = isDragging ? 0.5 : 1;
  const containerStyle = { opacity };

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      forwardedref: ref,
      style: containerStyle
    })
  );
});

export default DragItem;
