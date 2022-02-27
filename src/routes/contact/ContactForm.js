import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormSentConfirmation from './FormSentConfirmation'
import "./ContactForm.css";
import emailjs, { init } from "@emailjs/browser";
init("user_FAmebZw7xCfdEtDd8aW5g");

export default function ContactForm() {
  const [formSent, setFormSent] = useState(false);
  const [validated, setValidated] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageCopy, setMessageCopy] = useState("");
  const [toSend, setToSend] = useState({
    to_name: "Gabee",
    from_name: "",
    subject: "",
    message: "",
    reply_to: "",
    pronouns: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    submitForm();
  };

  function submitForm() {
    emailjs
      .send(
        "default_service",
        "MMcontact",
        toSend,
        "user_FAmebZw7xCfdEtDd8aW5g"
      )
      .then((response) => {
        setFormSent(true);
        setMessageCopy(toSend);
        setToSend({
          to_name: "Gabee",
          from_name: "",
          pronouns: "",
          reply_to: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

    //listen for name input changes
    useEffect(() => {
      if (toSend.from_name.length >= 1) {
        setNameIsValid(true)
      } else {
        setNameIsValid(false)
      }
    }, [toSend.from_name]);

  function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      setEmailIsValid(true);
    }
  }

    //listen for email changes
    useEffect(() => {
      if (toSend.reply_to) {
        validateEmail(toSend.reply_to);
      }
    }, [toSend.reply_to]);

  //listen for message input changes
  useEffect(() => {
    if (toSend.message.length > 10) {
      setMessageIsValid(true)
    } else {
      setMessageIsValid(false)
    }
  }, [toSend.message]);

  //validate all
  useEffect(() => {
    if (messageIsValid && emailIsValid && nameIsValid) {
      setValidated(true)
    }
  },[messageIsValid, emailIsValid, nameIsValid]);


  return formSent ? (
    <FormSentConfirmation messageCopy={messageCopy} />
  ) : (
    <Row className="ContactForm align-items-center justify-content-center">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Floating className="mb-2">
          <Form.Control
            id="name"
            value={toSend.from_name}
            type="text"
            name="from_name"
            placeholder="first name"
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
        </Form.Floating>
        <Form.Select
          aria-label="pronoun dropdown"
          className="mb-3"
          name="pronouns"
          onChange={handleChange}
        >
          <option>Pronouns</option>
          <option value="she-her">She/Her</option>
          <option value="he-him">He/Him</option>
          <option value="they-them">They/Them</option>
          <option value="not-listed">Not Listed/Specify in Message</option>
        </Form.Select>

        <Form.Floating className="mb-2">
          <Form.Control
            id="email"
            value={toSend.reply_to}
            type="text"
            name="reply_to"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <Form.Control.Feedback type="invalid">
            Please provide a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-2">
          <Form.Control
            id="subject"
            type="text"
            value={toSend.subject}
            name="subject"
            placeholder="Subject (optional)"
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
        </Form.Floating>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            value={toSend.message}
            name="message"
            placeholder="Message to MothMysticals:"
            style={{ height: "150px" }}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Message body must be longer than 10 characters.
          </Form.Control.Feedback>
        </FloatingLabel>
        <div className="d-grid gap-2 mt-2 mb-2">
          {validated ?
          (<Button variant="warning" size="lg" type="submit" className="mb-1">
            Submit
          </Button>)
          :
          (
          (<Button variant="warning" size="lg" type="submit" className="mb-1" disabled>
            Submit
          </Button>)
          )}
        </div>
      </Form>
    </Row>
  );
}
