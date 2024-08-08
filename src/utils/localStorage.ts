// utils/localStorage.ts

/**
 * Sets an item in local storage.
 * @param key - The key for the item.
 * @param value - The value to store.
 */
export const setLocalStorageItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Gets an item from local storage.
 * @param key - The key for the item.
 * @returns The stored value, or null if not found.
 */
export const getLocalStorageItem = (key: string): any => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

/**
 * Removes an item from local storage.
 * @param key - The key for the item.
 */
export const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};
