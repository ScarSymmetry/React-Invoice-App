export const generateRandomId = () => {
  const digits = Math.floor(Math.random() * 8999 + 1000);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let characters = '';

  while (characters.length < 2) {
    characters += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return `${characters.toUpperCase()}${digits}`;
};
