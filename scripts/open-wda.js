const path = require('path');
const {exec} = require('teen_process');
const {logger} = require('appium/support');

const log = logger.getLogger('WDA');
const {BOOTSTRAP_PATH} = require('appium-webdriveragent');
const XCODEPROJ_NAME = 'WebDriverAgent.xcodeproj';

async function openWda() {
  const dstPath = path.resolve(BOOTSTRAP_PATH, XCODEPROJ_NAME);
  log.info(`Opening '${dstPath}'`);
  await exec('open', [dstPath]);
}

(async () => await openWda())();
