
import ResizeTextarea from "react-textarea-autosize";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const [rows, setRows] = React.useState(1);
  const [shiftEnter, setShiftEnter] = React.useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(event.shiftKey) {
        setShiftEnter(true);
      } else if(shiftEnter) {
        event.preventDefault();
        setRows(rows + 1);
      }
    } else if(event.key === 'Shift') {
      setShiftEnter(false);
    }
  };

  return (
    <ResizeTextarea
      ref={ref}
      minRows={1}
      maxRows={6}
      rows={rows}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      {...props}
    />
  );
});

export default Input