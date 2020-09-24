import React from "react";
import PropTypes from "prop-types";
import FormGroupB from 'react-bootstrap/FormGroup';

function FormGroup(props) {
  return <FormGroupB {...props}>{props.children}</FormGroupB>;
}

FormGroup.propTypes = {
  /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node,
};

export { FormGroup as default };
