const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const shelljs = require('shelljs');
const dotenv = require('dotenv');
const clipboardy = require('clipboardy')

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const screenshotFilePath = `${process.env.SCREENSHOT_TEMP_DIR}/screenshot.png`

shelljs.exec(`screencapture -i ${screenshotFilePath}`, (code, _stdout, stderr) => {
  // 0 is the default exit success code for shell script exe
  if (code !== 0) {
    console.error('error running shell command', stderr);
    return;
  }

  // don't overwrite if file exists
  if (!fs.existsSync(screenshotFilePath)) {
    console.error(`last screenshot didn't upload, new screenshot not overwriting ${screenshotFilePath}`);
    return;
  }

  // call cloudinary upload, write url to clipboard, delete file after
  cloudinary.uploader.upload(screenshotFilePath, {
    folder: process.env.MEDIA_LIBRARY_FOLDER
  }, (err, res) => {
    if (err) {
      console.error('cloudinary err response', err.message);
      return;
    }

    clipboardy.writeSync(res.secure_url);

    shelljs.rm(screenshotFilePath);
  });
});

