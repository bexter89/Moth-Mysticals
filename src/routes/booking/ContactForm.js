import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ContactForm.css";
import{ init } from '@emailjs/browser';
init("user_FAmebZw7xCfdEtDd8aW5g");


export default function ContactForm() {
  const [toSend, setToSend] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
    pronouns: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send("default_service", "MMcontact", toSend, "user_FAmebZw7xCfdEtDd8aW5g")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <Row>
      <Form onSubmit={onSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="first_name"
            type="text"
            name='name'
            placeholder="first name"
            onChange={handleChange}
          />
          <label htmlFor="first_name">Name</label>
        </Form.Floating>
        <Form.Select aria-label="pronoun dropdown" size="lg" className="mb-3" name='pronouns' onChange={handleChange}>
          <option>Pronouns</option>
          <option value="she-her">She/Her</option>
          <option value="he-him">He/Him</option>
          <option value="they-them">They/Them</option>
          <option value="not-listed">Not Listed/Specify in Message</option>
        </Form.Select>
        <Form.Floating className="mb-3">
          <Form.Control
            id="email"
            type="text"
            name='email'
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="subject"
            type="text"
            name='subject'
            placeholder="Subject"
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
        </Form.Floating>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            name='message'
            placeholder="Message to MothMysticals:"
            style={{ height: "150px" }}
            onChange={handleChange}
          />
        </FloatingLabel>
        <div className="d-grid gap-2 mt-2 mb-3">
          <Button variant="warning" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Row>
  );
}
