const fs = require('fs');

const writeFile = (location, data) => {
  fs.writeFile(location, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else console.log('Files Written.');
  });
};

module.exports = { writeFile };
