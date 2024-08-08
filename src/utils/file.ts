// utils/fileToBytes.ts

/**
 * Converts a file to bytes (Uint8Array) for inserting as a blob in SQLite.
 * @param file - The file to convert.
 * @returns A promise that resolves to the byte array.
 */
export const fileToBytes = (file: File): Promise<Uint8Array> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const uint8Array = new Uint8Array(arrayBuffer);
      resolve(uint8Array);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};
