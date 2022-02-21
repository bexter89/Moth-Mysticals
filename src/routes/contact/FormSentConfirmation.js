import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

export default function FormSentConfirmation({messageCopy}) {
  return (
  <Alert variant="success">
    <Alert.Heading>Email sent successfully!</Alert.Heading>
    <p>You should hear back in 24-48hrs.</p>
    <hr />
    <p className="mb-0">
      message sent to Moth Mysticals:
      <br />
      <strong>From:</strong> {messageCopy.from_name}, {messageCopy.Pronouns}
      <br />
      <strong>Email:</strong> {messageCopy.reply_to}
      <br />
      <br />
      <strong>Subject:</strong>
      {messageCopy.subject}
      <br />
      <strong>Message:</strong>
      {messageCopy.message}
    </p>
  </Alert>
  )
}