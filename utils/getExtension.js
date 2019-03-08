/**
 * @description
 * This function is used to extract the extension from the file.
 * @param {*} fileName - Entire FileName
 */
const getExtension = (fileName = '') => fileName.split('.').pop();

module.exports = getExtension;
