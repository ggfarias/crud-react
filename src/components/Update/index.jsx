import "./update.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);
  const updateAPIData = () => {
    axios.put(`https://6552dcde5449cfda0f2ddf42.mockapi.io/fakeData`, {
        firstName,
        lastName,
        checkbox
    })
  }

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'));
  }, []);

  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            value={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};

export default Update;
