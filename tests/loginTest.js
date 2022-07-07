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
  let driver = await new Builder().forBrowser('firefox').build();
  let options = {
    widths:[599,899,1200]
  }

  try {

    await driver.get("http://forum.thirdbridge.com/");
    // await percySnapshot(driver, 'Form loaded empty');

    await driver.findElement(By.xpath(".//input[@id='userName']")).sendKeys('fpathb+trial-test3@gmail.com');
    await driver.findElement(By.xpath(".//input[@id='userPassword']")).sendKeys('PageNotRendered899#');
    await driver.findElement(By.xpath(".//button[@type='submit']")).click();
    await driver.sleep(10000);
    await percySnapshot(driver, 'taking homepage snap',options );

    // await driver.get('https://the-internet.herokuapp.com/login');
    // await driver.sleep(5000);
    // await percySnapshot(driver, 'Page loaded');
    // await driver.findElement(By.id('username')).sendKeys('tomsmith');
    // await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!');
    // await driver.findElement(By.xpath("//*[@id='login']/button")).click();
    // await driver.sleep(5000);
    // await percySnapshot(driver, 'Auth attempted');
  } catch (error) {
    console.log(error);
    await driver.quit()
  } finally {
    await driver.quit()
  }
})();
