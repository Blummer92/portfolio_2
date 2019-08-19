import React, {useState} from "react"; //this is a stateless. useState can only be used with stateless react component  https://reactjs.org/docs/hooks-state.html
import DropdownButton from 'react-bootstrap/DropdownButton'


  <ButtonToolbar>
    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
      <DropdownType
        size="lg"
        title="Drop small"
        id={`dropdown-button-drop-${idx}`}
        key={idx}
      >

        <Dropdown.Item eventKey="1">User</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">Admin</Dropdown.Item>

      </DropdownType>
    ))}
  </ButtonToolbar>
</>
    
export default SignUpForm;