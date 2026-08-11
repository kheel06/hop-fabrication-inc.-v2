const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: 1,
  });

  console.log("🌐 Opening Hop Fabrications...");

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
  });

  // Wait for fonts
  await page.evaluate(async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }
  });

  await page.waitForTimeout(1500);

  console.log("⬇️ Scrolling through website...");

  let previousHeight = 0;

  while (true) {
    const currentHeight = await page.evaluate(() => {
      return document.documentElement.scrollHeight;
    });

    console.log(`📏 Page height: ${currentHeight}px`);

    if (currentHeight === previousHeight) {
      const atBottom = await page.evaluate(() => {
        return (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10
        );
      });

      if (atBottom) {
        break;
      }
    }

    previousHeight = currentHeight;

    // Scroll gradually
    await page.evaluate(async () => {
      const distance = 400;

      await new Promise((resolve) => {
        window.scrollBy({
          top: distance,
          behavior: "smooth",
        });

        setTimeout(resolve, 500);
      });
    });

    await page.waitForTimeout(300);
  }

  console.log("✅ Reached bottom");

  // Give the final section animations time to finish
  await page.waitForTimeout(3000);

  console.log("📸 Taking screenshot...");

  await page.screenshot({
    path: "hop-fabrications-full.png",
    fullPage: true,
  });

  console.log("✅ Screenshot saved!");
  console.log("📁 hop-fabrications-full.png");

  await browser.close();
})();