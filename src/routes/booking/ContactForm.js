import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  return (
    <Row className="justify-content-center">
      <Form>
          <Form.Floating className="mb-3">
            <Form.Control
              id="first-name"
              type="text"
              placeholder="first name"
            />
            <label htmlFor="first-name">Name</label>
          </Form.Floating>
          <Form.Select aria-label="pronoun dropdown" className="mb-3">
            <option>Pronouns</option>
            <option value="1">She/Her</option>
            <option value="2">He/Him</option>
            <option value="3">They/Them</option>
            <option value="4">Not Listed/Specify in Message</option>
          </Form.Select>
          <Form.Floating className="mb-3">
            <Form.Control id="email" type="text" placeholder="Email" />
            <label htmlFor="email">Email</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control id="subject" type="text" placeholder="subject" />
            <label htmlFor="subject">Subject</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <label htmlFor="message">Message</label>
            <Form.Control id="message" as="textarea" rows={5} />
          </Form.Floating>
          <div className="d-grid gap-2 mb-3">
          <Button variant="warning" size="lg" type="submit">
            Submit
          </Button>
          </div>
      </Form>
    </Row>
  );
}
