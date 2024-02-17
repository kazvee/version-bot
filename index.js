/**
 * Increments the software version number
 *
 * @param {string} currentVersion - The current version string
 * @returns {string} - The incremented new version string
 */
const nextVersion = (currentVersion) => {
  const removeDots = currentVersion.replace(/\./g, '');
  const dotCount = currentVersion.length - removeDots.length;
  const incrementVersionNumber = String(Number(removeDots) + 1);

  let newVersion = '';
  for (let i = incrementVersionNumber.length - 1, dotAdded = 0; i >= 0; i--) {
    newVersion = incrementVersionNumber[i] + newVersion;
    if (dotAdded < dotCount && i > 0) {
      newVersion = '.' + newVersion;
      dotAdded++;
    }
  }
  return newVersion;
};

module.exports = nextVersion;
