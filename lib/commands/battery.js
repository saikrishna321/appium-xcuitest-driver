export default {
  /**
   * Reads the battery information from the device under test.
   *
   * This endpoint only returns reliable result on real devices.
   *
   * @returns {Promise<BatteryInfo>} The battery info
   * @this {import('../driver.js').XCUITestDriver}
   */
  async mobileGetBatteryInfo() {
    const {Services} = await import('appium-ios-remotexpc');
    const diagService = await Services.startDiagnosticsService(this.device.udid);
    const rawInfo = await diagService.ioregistry({
      ioClass: 'IOPMPowerSource',
      returnRawJson: true,
    });
    this.log.info(`batteryInfo: ${JSON.stringify(rawInfo)}`);
    return /** @type {BatteryInfo} */ (await this.proxyCommand('/wda/batteryInfo', 'GET'));
  },
};

/**
 * @typedef {import('./types').BatteryInfo} BatteryInfo
 */
