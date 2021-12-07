const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const percySnapshot = require('@percy/selenium-webdriver');
// const httpServer = require('http-server');
const spawn = require('child_process').spawn;
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
  let driver = await new Builder().forBrowser('firefox').build();

  try {
    await driver.get("http://localhost:3000/webPageDemo.html");
    await percySnapshot(driver, 'Form loaded empty');

    await driver.findElement(By.id('user')).sendKeys('inderjeet.s');
    await driver.findElement(By.id('pass')).sendKeys('Super#Pass');
    await percySnapshot(driver, 'Creds filled');
  } catch (error) {
    console.log(error);
    await driver.quit()
  } finally {
    await driver.quit()
  }
})();
