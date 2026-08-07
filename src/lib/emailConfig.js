// ---------------------------------------------------------------------------
// EmailJS configuration
//
// Reads credentials from environment variables so no secrets live in code.
// See README.md for the full step-by-step EmailJS setup guide.
// ---------------------------------------------------------------------------

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  destinationEmail: "fasihaafridi15@gmail.com",
};

export const isEmailServiceConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
);
