import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ContactForm.css";
import emailjs, { init } from '@emailjs/browser';
init("user_FAmebZw7xCfdEtDd8aW5g");


export default function ContactForm() {
  const [formSent, setFormSent] = useState(false)
  const [toSend, setToSend] = useState({
    to_name: "Gabee",
    from_name: "",
    subject: "",
    message: "",
    reply_to: "",
    pronouns: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send("default_service", "MMcontact", toSend, "user_FAmebZw7xCfdEtDd8aW5g")
      .then((response) => {
        setFormSent(true)
        setToSend(   { to_name: "Gabee",
        from_name: "",
        subject: "",
        message: "",
        reply_to: "",
        pronouns: "",})
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert('Please try correcting the form fields and sending again!')
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return formSent ?
  (
    <Alert variant="success">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
      </p>
    </Alert>
  )
  :
  ( <Row>
      <Form onSubmit={onSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="name"
            value={toSend.from_name}
            type="text"
            name='from_name'
            placeholder="first name"
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </Form.Floating>
        <Form.Select aria-label="pronoun dropdown" className="mb-3" name='pronouns' onChange={handleChange}>
          <option>Pronouns</option>
          <option value="she-her">She/Her</option>
          <option value="he-him">He/Him</option>
          <option value="they-them">They/Them</option>
          <option value="not-listed">Not Listed/Specify in Message</option>
        </Form.Select>
        <Form.Floating className="mb-3">
          <Form.Control
            id="email"
            value={toSend.reply_to}
            type="text"
            name='reply_to'
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="subject"
            type="text"
            value={toSend.subject}
            name='subject'
            placeholder="Subject"
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
        </Form.Floating>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            value={toSend.message}
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
  )
}
