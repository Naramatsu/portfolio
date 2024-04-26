"use server";
import { Resend } from "resend";
import EmailTemplate from "../components/EmailTemplate";

export const sendEmail = async (prevState, formData) => {
  const name = formData.get("firtname");
  const lastname = formData.get("lastname");
  const email = formData.get("emailaddress");
  const phone = formData.get("phonenumber");
  const message = formData.get("message");
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const newName = `${name} ${lastname} - [${phone}]`;

    await resend.emails.send({
      from: `${name} <${process.env.RESEND_EMAIL_FROM}>`,
      to: process.env.RESEND_EMAIL_TO,
      subject: "Reach you from your Online Curriculum.",
      react: EmailTemplate({ name: newName, email, message }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      error: error.message,
      success: false,
    };
  }
};
