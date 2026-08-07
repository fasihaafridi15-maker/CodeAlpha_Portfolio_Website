import emailjs from "@emailjs/browser";
import { emailConfig, isEmailServiceConfigured } from "./emailConfig";

/**
 * Sends the contact form directly via EmailJS using sendForm(), which reads
 * field values straight from the <form> element by their `name` attributes.
 *
 * Required env vars (see .env.example / README.md):
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *   VITE_EMAILJS_PUBLIC_KEY
 *
 * @param {HTMLFormElement} formElement - the actual <form> DOM node
 * @returns {Promise<{status: "sent"}>}
 * @throws if EmailJS is not configured, or the send fails
 */
export async function sendContactEmail(formElement) {
  if (!isEmailServiceConfigured) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file."
    );
  }

  await emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    formElement,
    { publicKey: emailConfig.publicKey }
  );

  return { status: "sent" };
}
