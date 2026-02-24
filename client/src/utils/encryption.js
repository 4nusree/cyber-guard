export const encryptMessage = (text) => {
  try {
    return btoa(text);
  } catch (e) {
    console.error("Encryption failed", e);
    return text;
  }
};

export const decryptMessage = (text) => {
  try {
    return atob(text);
  } catch (e) {
    console.error("Decryption failed", e);
    return text;
  }
};
