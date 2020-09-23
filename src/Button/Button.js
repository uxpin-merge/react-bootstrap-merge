import React from "react";
import PropTypes from "prop-types";
import ButtonB from 'react-bootstrap/Button';


function Button(props) {
  return (
    <ButtonB {...props} onClick={props.onClick}>
      {props.children}
    </ButtonB>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  /**
   * The content of the button.
   */
  children: PropTypes.node,

  /**
   * The size of the button.
   */
   size: PropTypes.oneOf(["sm", "lg"]),

   /**
   * If `true`, the button will take up the full width of its parent.
   */
  block: PropTypes.bool,
};

export { Button as default };
