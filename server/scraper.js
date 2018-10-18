const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: true});
    
    const page = await browser.newPage();

        await page.goto('https://dolartoday.com/');
        await page.waitFor(1*1000);
        const result = await page.evaluate(() => {
            
            let elements = document.getElementById('result').value;
            element = elements.substring(elements.indexOf(" "),).replace(',','.')
            console.log(element)
            return element

        });

    // getDolarPriceTwitterBTCPlay = (page) => {

    //     await page.goto('https://twitter.com/BTC_Play');
    //     await page.waitFor(3*1000);

    //     const result = await page.evaluate(() => {

    //         let elements = document.querySelector('.ProfileHeaderCard-bio').innerText;
            element = elements.substring(a.indexOf("") , a.indexOf(" BsS")).replace(',', '.').split(' ')[1]
    //         console.log(element)
    //         return element

    //     });

    //     return result

    // }

    // DT = getDolarPriceDolarToday(page)
    // BTC = getDolarPriceTwitterBTCPlay(page)

    browser.close();// Return the data
    return result ;
};

scrape().then((value) => {
    console.log(value); // Success!
});