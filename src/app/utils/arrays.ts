export const splitToChunks = (
  inputArray: string[],
  chunkSize = 20
): string[][] => {
  const chunks = [];

  for (let i = 0; i < inputArray.length; i += chunkSize) {
    chunks.push(inputArray.slice(i, i + chunkSize));
  }

  return chunks;
};
