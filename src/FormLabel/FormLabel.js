import React from "react";
import PropTypes from "prop-types";
import FormLabelB from 'react-bootstrap/FormLabel';


function FormLabel(props) {
  return (
    <FormLabelB {...props}>
      {props.children}
    </FormLabelB>
  );
}

FormLabel.propTypes = {
  onClick: PropTypes.func,
  /**
   * The content of the button.
   */
  children: PropTypes.node,
};

export { FormLabel as default };
