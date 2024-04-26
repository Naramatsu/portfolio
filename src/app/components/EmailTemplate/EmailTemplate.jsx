import React from "react";
import { Heading, Html, Text } from "@react-email/components";

const EmailTemplate = ({ name, email, message }) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission From Portfolio</Heading>
      <Text>Details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};

export default EmailTemplate;
