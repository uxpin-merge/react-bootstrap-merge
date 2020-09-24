import React from "react";
import PropTypes from "prop-types";
import FormControlB from 'react-bootstrap/FormControl';


function FormControl(props) {
  return (
    <FormControlB {...props}>
      {props.children}
    </FormControlB>
  );
}

FormControl.propTypes = {
  onClick: PropTypes.func,

  /**
   * The content of the control.
   */
  children: PropTypes.node,

  /**
   * The underlying HTML element to use when rendering the FormControl.
   */
  as: PropTypes.oneOf(["input", "textarea", "select"]),

  /**
   * The HTML input type, which is only relevant if as is 'input' (the default).
   */
  type: PropTypes.string,

  /**
   * Text to display when the control is empty.
   */
  placeholder: PropTypes.string
};

export { FormControl as default };
