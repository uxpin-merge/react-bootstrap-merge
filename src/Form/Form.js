import React from "react";
import PropTypes from "prop-types";
import FormB from 'react-bootstrap/Form';

function Form(props) {
  return <FormB {...props}>{props.children}</FormB>;
}

Form.propTypes = {
  /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node,
};

export { Form as default };
