const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const percySnapshot = require('@percy/selenium-webdriver');
// const httpServer = require('http-server');
const spawn = require('child_process').spawn;
const { elementIfExists } = require('wd/lib/commands');
// const server = httpServer.createServer();

// const PORT = process.env.PORT_NUMBER || 3000;
// const TEST_URL = `http://localhost:${PORT}`;

// server.listen(PORT);
// console.log(`Server is listening on ${TEST_URL}`);

// async function cleanup({ driver, isError = 0 }) {
//   driver && (await driver.quit());
//   // server && server.close();

//   process.exit(isError);
// }

(async function() {
  var capabilities = {
    'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Monterey",
      "buildName" : "Case related tests",
      "sessionName" : "checking percy snaps",
      "local" : "false",
      "debug" : "true",
      "networkLogs" : "true",
      "seleniumVersion" : "4.0.0",
      "userName" : "inderjeetsaluja_IyX0Zc",
      "accessKey" : "Sdhzn5qssCTptxY5uFJq",
      "geoLocation": "FR"
    }, 
    "browserName" : "Chrome",
    "browserVersion" : "100.0",
  }    

  let driver = new Builder()
    .usingServer('https://inderjeetsaluja_IyX0Zc:Sdhzn5qssCTptxY5uFJq@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

  try {
    await driver.get("https://www.google.com");
    await driver.sleep(5000);
    await percySnapshot(driver, 'Before accepting google cookie pop-up');
    // await driver.findElement(By.xpath('(//input[@name="btnI"])[2]')).click();
    await driver.findElement(By.id('L2AGLb')).click();
    await driver.sleep(5000);
    await percySnapshot(driver, 'After accepting google cookie pop-up');

    // await driver.findElement(By.id('user')).sendKeys('inderjeets@browserstack.com');
    // await driver.findElement(By.id('pass')).sendKeys('Super#Password!');
    // await percySnapshot(driver, 'Creds filled');
  } catch (error) {
    console.log(error);
    await driver.quit()
  } finally {
    await driver.quit()
  }
})();
