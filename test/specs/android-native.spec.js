describe('Android native feature', () => {

    it('Acess an Activity directly', async () => {
        //start the activity - ('package', 'package.activity')
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.HelloWorld');

        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Activity/Hello World"]')).toBeDisplayed();
    });

    it('Dialog/Alert testing - by acceptAlert', async () => {
        //go to page
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

       //find by accessibility id 
        await $('~OK Cancel dialog with a message').click();

        //verify if dialos is on screen
        const alertText = await driver.getAlertText();
        console.log('Alert text:', alertText)

        //accept alert
        await driver.acceptAlert();

        //assertion - alert box not visible
        await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();


        //await $('//*[@resource-id="android:id/button1"]').click();
    });
    
    it('Dialog/Alert testing - by botton clicking 1', async () => {
        //go to page
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

       //find by accessibility id 
        await $('~OK Cancel dialog with a message').click();

        //accept alert
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box not visible
        await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Dialog/Alert testing - by botton clicking 2', async () => {
        //go to page
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

       //find by accessibility id 
        await $('~OK Cancel dialog with a message').click();

        //accept alert
        await $('//*[@resource-id="android:id/button2"]').click();

        //assertion - alert box not visible
        await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    
    it('Vertical Scrolling', async () => {

        await $('~App').click();
        await $('~Activity').click();

        //click into text after scrolling vertically - not stable way 
        //const configScroll = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await configScroll.click();

        //click into text after scrolling vertically - more stable way
        const configScrollText = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
        await configScrollText.click();

        //assert
        await expect($('~Secure Dialog').toBeExisting())      
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.Gallery1');

        const configScrollForward = await $('android=new UiScrollable( new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        const configScrollBackward = await $('android=new UiScrollable( new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        await driver.pause(3000);
    })

    it.only('Change Date', async () => {

    await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.DateWidgets1')

    const date =  await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
    const firstDateText = await date.getText();
    console.log('Primeira Data:',firstDateText);
    await $('~change the date').click();

    const monthSelector = await $('//*[@resource-id="android:id/month_view"]')
    await monthSelector.click()
    //const configScrollForward = await $('android=new UiScrollable( new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    for (let i = 0; i < 3; i++) {
        const configFlingForward = await $('android=new UiScrollable( new UiSelector().scrollable(true)).setAsHorizontalList().flingForward()');
      }

    const dateSlector = await $('//*[@text="10"]').click();

    //ok click
    await $('//*[@resource-id="android:id/button1"]').click();
    const dateUpdatedText = await date.getText();
    console.log('Data atualizada:',dateUpdatedText)

    //compar date from before

    await expect(firstDateText).not.toEqual(dateUpdatedText);

    await driver.pause(3000);

    })
});