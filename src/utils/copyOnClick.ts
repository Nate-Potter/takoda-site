const emailAddress = "takodatavern@aol.com";
const phoneNumber = "(720) 851-5302";

export const copyEmail = (): void => {
  navigator.clipboard.writeText(emailAddress);
  alert("Email Copied: " + emailAddress);
};

export const copyPhone = (): void => {
  navigator.clipboard.writeText(phoneNumber);
  alert("Phone Number Copied: " + phoneNumber);
};
