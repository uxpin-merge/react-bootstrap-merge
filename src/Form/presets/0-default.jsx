import * as React from "react";
import Form from "../Form";
import FormGroup from '../../FormGroup/FormGroup';
import FormLabel from '../../FormLabel/FormLabel';
import FormControl from '../../FormControl/FormControl';
import Button from '../../Button/Button';

export default (
  <Form uxpId="1">
    <FormGroup uxpId="2">
      <FormLabel uxpId="3">Email address</FormLabel>
      <FormControl uxpId="4" type="email" placeholder="Enter email" />
    </FormGroup>
    <Button uxpId="5" variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);


// export default (
//   <Form uxpId="1">
//       <FormGroup uxpId="2" controlId="formBasicEmail">
//         <FormLabel uxpId="3">Email address</FormLabel>
//         <FormControl uxpId="4" type="email" placeholder="Enter email" />
//         <FormText uxpId="5" className="text-muted">
//           We'll never share your email with anyone else.
//         </FormText>
//       </FormGroup>
//
//       <FormGroup uxpId="6" controlId="formBasicPassword">
//         <FormLabel uxpId="7">Password</FormLabel>
//         <FormControl uxpId="8" type="password" placeholder="Password" />
//       </FormGroup>
//       <FormGroup uxpId="9" controlId="formBasicCheckbox">
//         <FormCheck uxpId="10" type="checkbox" label="Check me out" />
//       </FormGroup>
//
//       <Button uxpId="11" variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
// );
