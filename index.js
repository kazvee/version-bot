/**
 * Increments the software version number
 *
 * @param {string} currentVersion - The current version string
 * @returns {string} - The incremented new version string
 */
const nextVersion = (currentVersion) => {
  const versionArray = currentVersion.split('.').map(Number);

  versionArray[versionArray.length - 1] += 1;

  for (let i = versionArray.length - 1; i > 0; i--) {
    if (versionArray[i] === 10) {
      versionArray[i] = 0;
      versionArray[i - 1] += 1;
    }
  }

  return versionArray.join('.');
};

module.exports = nextVersion;
