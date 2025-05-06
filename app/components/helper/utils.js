/**
 * Safely check if code is running in a browser environment
 */
export const isBrowser = () => {
  return typeof window !== "undefined" && typeof document !== "undefined";
};

/**
 * Safely access document object
 * @param {Function} callback - Function to execute with document object
 * @returns {*} Result of the callback or undefined if not in browser
 */
export const withDocument = (callback) => {
  if (isBrowser()) {
    return callback(document);
  }
  return undefined;
};
