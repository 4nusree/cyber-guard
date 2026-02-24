const BANNED_KEYWORDS = ['malware', 'exploit', 'hack', 'ddos', 'phish'];

export const containsBadWords = (text) => {
  const lowerText = text.toLowerCase();
  return BANNED_KEYWORDS.some(word => lowerText.includes(word));
};
