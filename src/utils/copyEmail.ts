const emailAddress = "takodatavern@aol.com";

export const copyEmail = (): void => {
  navigator.clipboard.writeText(emailAddress);
  alert("Email Copied: " + emailAddress);
};
